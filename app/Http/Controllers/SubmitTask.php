<?php

namespace App\Http\Controllers;

use App\Models\Rekrutmen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravolt\Camunda\Exceptions\CamundaException;
use Laravolt\Camunda\Http\ProcessInstanceClient;
use Laravolt\Camunda\Http\TaskClient;

class SubmitTask extends Controller
{
    public function __invoke(Request $request)
    {
        try {
            $data = collect($request->all())->reject(fn($item, $key) => Str::startsWith($key, '_'))->toArray();
            $taskId = $request->get('_task_id');
            $task = TaskClient::find($taskId);

            TaskClient::submit($taskId, $data);

            $currentTasks = ProcessInstanceClient::tasks($task->processInstanceId);
            $currentTaskKey = optional(\Arr::first($currentTasks))->taskDefinitionKey;
            $data['current_task'] = $currentTaskKey;

            Rekrutmen::where('process_instance_id', $task->processInstanceId)->update($data);

            return back()->with('success', 'Task completed');
        } catch (CamundaException $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}

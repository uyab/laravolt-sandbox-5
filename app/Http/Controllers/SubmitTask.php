<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravolt\Camunda\Models\Task;

class SubmitTask extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = collect($request->all())->reject(fn($item, $key) => Str::startsWith($key, '_'))->toArray();
        $task = new Task(['id' => $request->get('_task_id')]);
        $task->submit($data);

        return back()->with('success', 'Task completed');
    }
}

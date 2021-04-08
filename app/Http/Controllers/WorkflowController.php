<?php

namespace App\Http\Controllers;

use App\Models\Rekrutmen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravolt\Camunda\Models\ProcessDefinition;
use Laravolt\Camunda\Models\ProcessInstance;

class WorkflowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processDefinition = ProcessDefinition::findByKey(request('processDefinition'));

        return view('workflow.index', compact('processDefinition'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $processDefinition = ProcessDefinition::findByKey(request('processDefinition'));
        $formDefinition = config("forms.{$processDefinition->key}");

        return view('workflow.create', compact('formDefinition', 'processDefinition'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $processDefinition = ProcessDefinition::findByKey(request('_process_definition'));
        $id = Str::uuid()->toString();
        $payload = collect($request->all())
            ->reject(fn($item, $key) => Str::startsWith($key, '_'))
            ->merge(['dokumen_pendukung' => request('_dokumen_pendukung')])
            ->toArray();

        $processInstance = $processDefinition->start($payload, $id);

        Rekrutmen::create($payload + ['process_instance_id' => $processInstance->id, 'current_task' => $processInstance->currentTask()->taskDefinitionKey, 'status' => 'ACTIVE']);

        return redirect()->route('workflow.show', ['workflow' => $processInstance->id])->with('success', "{$processDefinition->name} berhasil dibuat");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $formDefinition = [];
        $processInstance = ProcessInstance::find($id);

        $task = $processInstance->currentTask();
        if ($task !== null) {
            $formDefinition = config("forms.{$task->taskDefinitionKey}");
        }

        $completedTasks = $processInstance->completedTasks();
        $rekrutmen = Rekrutmen::where('process_instance_id', $id)->first()->getAttributes();
        $forms = [
            'rekrutmen',
            'review_administrasi',
            'wawancara'
        ];
        $completedForms = [];
        foreach ($forms as $form) {
            if ($task !== null && $form === $task->taskDefinitionKey) {
                break;
            }
            $completedForms[] = $form;
        }

        return view('workflow.show', compact('processInstance', 'task', 'formDefinition', 'completedTasks', 'completedForms', 'rekrutmen'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravolt\Camunda\Models\ProcessDefinition;
use Laravolt\Camunda\Models\ProcessInstance;
use Ramsey\Uuid\Uuid;

class WorkflowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $processInstance = $processDefinition->start(
            collect($request->all())->reject(fn($item, $key) => Str::startsWith($key, '_'))->toArray() + ['id' => $id, 'dokumen_pendukung' => request('_dokumen_pendukung')],
            $id
        );

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

        return view('workflow.show', compact('processInstance', 'task', 'formDefinition', 'completedTasks'));
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

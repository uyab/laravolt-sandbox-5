<?php

namespace App\Http\Controllers;

use App\Models\Rekrutmen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravolt\Camunda\Http\ProcessDefinitionClient;
use Laravolt\Camunda\Http\ProcessInstanceClient;

class WorkflowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processDefinition = ProcessDefinitionClient::find(key: request('processDefinition'));

        return view('workflow.index', compact('processDefinition'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $processDefinition = ProcessDefinitionClient::find(key: request('processDefinition'));
        $formDefinition = config("forms.{$processDefinition->key}");

        return view('workflow.create', compact('formDefinition', 'processDefinition'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $processDefinition = ProcessDefinitionClient::find(key: request('_process_definition'));
        $id = Str::uuid()->toString();
        $payload = collect($request->all())
            ->reject(fn($item, $key) => Str::startsWith($key, '_'))
            ->merge(['dokumen_pendukung' => request()->media('dokumen_pendukung')->toJson()])
            ->toArray();

        $processInstance = ProcessDefinitionClient::start(id: $processDefinition->id, variables: $payload, businessKey: $id);

        Rekrutmen::create(
            $payload + [
                'process_instance_id' => $processInstance->id,
                'current_task' => ProcessInstanceClient::tasks($processInstance->id)[0]->taskDefinitionKey,
                'status' => 'ACTIVE',
            ]
        );

        return redirect()->route('workflow.show', ['workflow' => $processInstance->id])->with(
            'success',
            "{$processDefinition->name} berhasil dibuat"
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $formDefinition = [];
        $processInstance = ProcessInstanceClient::find($id);

        $task = ProcessInstanceClient::tasks($processInstance->id)[0] ?? null;
        if ($task !== null) {
            $formDefinition = config("forms.{$task->taskDefinitionKey}");
        }

        $completedTasks = ProcessInstanceClient::completedTasks($id);
        $rekrutmen = Rekrutmen::where('process_instance_id', $id)->first()->getAttributes();
        $forms = [
            'rekrutmen',
            'review_administrasi',
            'wawancara',
        ];
        $completedForms = [];
        foreach ($forms as $form) {
            if ($task !== null && $form === $task->taskDefinitionKey) {
                break;
            }
            $completedForms[] = $form;
        }

        return view(
            'workflow.show',
            compact(
                'processInstance',
                'task',
                'formDefinition',
                'completedTasks',
                'completedForms',
                'rekrutmen'
            )
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
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
     *
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
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

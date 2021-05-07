<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravolt\Camunda\Http\DeploymentClient;
use Laravolt\Camunda\Http\ProcessDefinitionClient;

class ProcessController extends Controller
{
    /**
     * ProcessController constructor.
     */
    public function __construct()
    {
        $this->middleware('can:process.index');
    }

    public function index()
    {
        $processDefinitions = ProcessDefinitionClient::get(['latestVersion' => true]);

        return view('process.index', compact('processDefinitions'));
    }

    public function store(Request $request)
    {
        $file = $request->file('file');
        $file->storeAs('temp', $file->getClientOriginalName());
        DeploymentClient::create('test', storage_path('app/temp/'.$file->getClientOriginalName()));

        return back()->with('success', 'Process definition deployed');
    }
}

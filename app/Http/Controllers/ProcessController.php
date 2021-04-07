<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravolt\Camunda\Models\Deployment;
use Laravolt\Camunda\Models\ProcessDefinition;

class ProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processDefinitions = ProcessDefinition::getList();

        return view('process.index', compact('processDefinitions'));
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
        $file = $request->file('file');
        $file->storeAs('temp', $file->getClientOriginalName());
        Deployment::create('test', storage_path('app/temp/'.$file->getClientOriginalName()));

        return back()->with('success', 'Process definition deployed');
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
        //
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

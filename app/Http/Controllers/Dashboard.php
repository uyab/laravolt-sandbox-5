<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // auth()->user()->permissions();
        // auth()->user()->permissions();
        auth()->user()->hasPermission('dx');
        auth()->user()->hasPermission('ddx');
        auth()->user()->hasPermission('ddasdfx');
        auth()->user()->hasPermission('ddx');
        auth()->user()->hasPermission('view');
        auth()->user()->hasPermission('view3');
        // User::find(2)->permissions();
        // User::find(2)->permissions();
        // User::find(1)->permissions();
        // User::find(1)->permissions();
        return view('dashboard');
    }
}

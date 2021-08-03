<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Home extends Controller
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
        $users = User::paginate(5);

        return view('home', compact('users'));
    }
}

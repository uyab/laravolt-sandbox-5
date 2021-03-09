<?php

namespace Modules\User\Controllers;

use Illuminate\Routing\Controller;
use Modules\User\Requests\Store;
use Modules\User\Requests\Update;
use Modules\User\Models\User;
use Modules\User\Tables\UserTableView;

class UserController extends Controller
{
    public function index()
    {
        return UserTableView::make()->view('user::index');
    }

    public function create()
    {
        return view('user::create');
    }

    public function store(Store $request)
    {
        User::create($request->validated());

        return redirect()->back()->withSuccess('User saved');
    }

    public function show(User $user)
    {
        return view('user::show', compact('user'));
    }

    public function edit(User $user)
    {
        return view('user::edit', compact('user'));
    }

    public function update(Update $request, User $user)
    {
        $user->update($request->validated());

        return redirect()->back()->withSuccess('User saved');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back()->withSuccess('User deleted');
    }
}

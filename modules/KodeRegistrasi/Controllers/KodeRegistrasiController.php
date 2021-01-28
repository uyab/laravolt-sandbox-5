<?php

namespace Modules\KodeRegistrasi\Controllers;

use Illuminate\Routing\Controller;
use Modules\KodeRegistrasi\Requests\Store;
use Modules\KodeRegistrasi\Requests\Update;
use Modules\KodeRegistrasi\Models\KodeRegistrasi;
use Modules\KodeRegistrasi\Tables\KodeRegistrasiTableView;

class KodeRegistrasiController extends Controller
{
    public function index()
    {
        return KodeRegistrasiTableView::make()->view('kode-registrasi::index');
    }

    public function create()
    {
        return view('kode-registrasi::create');
    }

    public function store(Store $request)
    {
        KodeRegistrasi::create($request->validated());

        return redirect()->back()->withSuccess('KodeRegistrasi saved');
    }

    public function show(KodeRegistrasi $kodeRegistrasi)
    {
        return view('kode-registrasi::show', compact('kodeRegistrasi'));
    }

    public function edit(KodeRegistrasi $kodeRegistrasi)
    {
        return view('kode-registrasi::edit', compact('kodeRegistrasi'));
    }

    public function update(Update $request, KodeRegistrasi $kodeRegistrasi)
    {
        $kodeRegistrasi->update($request->validated());

        return redirect()->back()->withSuccess('KodeRegistrasi saved');
    }

    public function destroy(KodeRegistrasi $kodeRegistrasi)
    {
        $kodeRegistrasi->delete();

        return redirect()->back()->withSuccess('KodeRegistrasi deleted');
    }
}

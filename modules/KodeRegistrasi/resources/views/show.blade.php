@extends('laravolt::layouts.app')

@section('content')

    <x-backlink url="{{ route('modules::kode-registrasi.index') }}"></x-backlink>

    <x-panel title="Detil Kode Registrasi">
        <table class="ui table definition">
        <tr><td>Id</td><td>{{ $kodeRegistrasi->id }}</td></tr>
        <tr><td>Kode</td><td>{{ $kodeRegistrasi->kode }}</td></tr>
        <tr><td>Created At</td><td>{{ $kodeRegistrasi->created_at }}</td></tr>
        <tr><td>Updated At</td><td>{{ $kodeRegistrasi->updated_at }}</td></tr>
        </table>
    </x-panel>

@stop

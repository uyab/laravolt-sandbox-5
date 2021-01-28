@extends('laravolt::layouts.app')

@section('content')


    <x-titlebar title="Kode Registrasi">
        <x-item>
            <x-link label="Tambah" icon="plus" url="{{ route('modules::kode-registrasi.create') }}"></x-link>
        </x-item>
    </x-titlebar>

    {!! $table !!}
@stop

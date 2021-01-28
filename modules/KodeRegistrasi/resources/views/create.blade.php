@extends('laravolt::layouts.app')

@section('content')

    <x-backlink url="{{ route('modules::kode-registrasi.index') }}"></x-backlink>

    <x-panel title="Tambah Kode Registrasi">
        {!! form()->post(route('modules::kode-registrasi.store'))->horizontal()->multipart() !!}
        @include('kode-registrasi::_form')
        {!! form()->close() !!}
    </x-panel>

@stop

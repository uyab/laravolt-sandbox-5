@extends('laravolt::layouts.app')

@section('content')

    <x-backlink url="{{ route('modules::kode-registrasi.index') }}"></x-backlink>

    <x-panel title="Edit Kode Registrasi">
        {!! form()->bind($kodeRegistrasi)->put(route('modules::kode-registrasi.update', $kodeRegistrasi->getKey()))->horizontal()->multipart() !!}
        @include('kode-registrasi::_form')
        {!! form()->close() !!}
    </x-panel>

@stop

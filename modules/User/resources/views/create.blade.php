@extends('laravolt::layouts.app')

@section('content')

    <x-backlink url="{{ route('modules::user.index') }}"></x-backlink>

    <x-panel title="Tambah User">
        {!! form()->post(route('modules::user.store'))->horizontal()->multipart() !!}
        @include('user::_form')
        {!! form()->close() !!}
    </x-panel>

@stop

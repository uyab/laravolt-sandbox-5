@extends('laravolt::layouts.app')

@section('content')


    <x-titlebar title="User">
        <x-item>
            <x-link label="Tambah" icon="plus" url="{{ route('modules::user.create') }}"></x-link>
        </x-item>
    </x-titlebar>

    {!! $table !!}
@stop

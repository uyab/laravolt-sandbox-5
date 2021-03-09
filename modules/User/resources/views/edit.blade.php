@extends('laravolt::layouts.app')

@section('content')

    <x-backlink url="{{ route('modules::user.index') }}"></x-backlink>

    <x-panel title="Edit User">
        {!! form()->bind($user)->put(route('modules::user.update', $user->getKey()))->horizontal()->multipart() !!}
        @include('user::_form')
        {!! form()->close() !!}
    </x-panel>

@stop

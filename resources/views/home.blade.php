<x-volt-app title="Home">

    {{--    @livewire(\App\Http\Livewire\Table\ArrayTable::class)--}}
        @livewire(\App\Http\Livewire\Table\EloquentBuilderTable::class)
    {{--    @livewire(\App\Http\Livewire\Table\EloquentCollectionTable::class)--}}
    {{--    @livewire(\App\Http\Livewire\Table\PaginationTable::class)--}}
    {{--    @livewire(\App\Http\Livewire\Table\QueryBuilderTable::class)--}}
    {{--    @livewire(\App\Http\Livewire\Table\QueryBuilderPaginationTable::class)--}}
    {{--    @livewire(\App\Http\Livewire\Table\HttpClientTable::class)--}}

    {{--<div class="ui menu">--}}
        {!! $users->links() !!}
    {{--</div>--}}
    {{--<?php--}}

    {{--$schema = [--}}
    {{--    'full_name' => ['type' => 'text', 'label' => 'Fullname'],--}}
    {{--    'email' => ['type' => 'email', 'label' => 'Email Address', 'required' => true],--}}
    {{--    'phone' => ['type' => 'text', 'label' => 'Phone'],--}}
    {{--    'review' => ['type' => 'redactor', 'label' => 'Review Tes Teknis']--}}
    {{--];--}}
    {{--?>--}}

    {{--<x-volt-form :schema="$schema" :action="url('platform/dump')">--}}
    {{--</x-volt-form>--}}

    {{--<x-volt-panel title="PDF Viewer" style="max-width: 500px">--}}
    {{--    <x-volt-pdf-viewer url="{{ asset('files/sample2.pdf') }}"></x-volt-pdf-viewer>--}}
    {{--</x-volt-panel>--}}

</x-volt-app>

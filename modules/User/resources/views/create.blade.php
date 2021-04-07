<x-laravolt::layout.app :title="__('laravolt::action.add') . ' User'">
    <x-laravolt::backlink url="{{ route('modules::user.index') }}"></x-backlink>

    <x-laravolt::panel title="Tambah User">
        {!! form()->post(route('modules::user.store'))->horizontal()->multipart() !!}
            @include('user::_form')
        {!! form()->close() !!}
    </x-laravolt::panel>
</x-laravolt::layout.app>

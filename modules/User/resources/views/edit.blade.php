<x-laravolt::layout.app :title="__('laravolt::action.edit') . ' User'">
    <x-laravolt::backlink url="{{ route('modules::user.index') }}"></x-backlink>

    <x-laravolt::panel title="Tambah User">
        {!! form()->bind($user)->put(route('modules::user.update', $user->getKey()))->horizontal()->multipart() !!}
            @include('user::_form')
        {!! form()->close() !!}
    </x-laravolt::panel>
</x-laravolt::layout.app>

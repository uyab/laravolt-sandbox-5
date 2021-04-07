<x-laravolt::layout.app :title="'User'">
    <x-slot name="actions">
        <x-laravolt::link-button
            :url="route('modules::user.create')"
            icon="plus"
            :label="__('laravolt::action.add')"
        />
    </x-slot>

    {!! $table !!}
</x-laravolt::layout.app>

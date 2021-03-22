<x-laravolt::layout.app :title="__('Edit Profil')">
    <x-laravolt::panel title="{{ __('Edit Profil') }}" icon="user-edit">
        {!! form()->bind($user)->put(route('my::profile.update'))->horizontal() !!}

        {!! form()->text('name')->label(__('laravolt::users.name')) !!}
        {!! form()->text('email')->label(__('laravolt::users.email'))->readonly() !!}
        {!! form()->dropdown('timezone', $timezones)->label(__('laravolt::users.timezone')) !!}

        {!! form()->action(form()->submit(__('laravolt::action.save'))) !!}
        {!! form()->close() !!}
    </x-laravolt::panel>
</x-laravolt::layout.app>

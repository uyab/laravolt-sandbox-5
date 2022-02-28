<x-volt-app title="Home">
    {!! form()->select('sentry_slug', ['satu', 'dua', 'tiga'])->multiple() !!}
{{--    @livewire(\App\Http\Livewire\Table\ApiTable::class)--}}

    {{--<x-onlyoffice id="1"></x-onlyoffice>--}}
    {{--<x-metabase question="1335" :params="$params"></x-metabase>--}}
    {{--<x-metabase dashboard="1" width="500px"></x-metabase>--}}
    {{--<x-metabase question="1"></x-metabase>--}}
{{--    @php($params = ['id' => 'asdf'])--}}
{{--    {!! form()->datepicker('end-date', '', 'd m Y')->label('End Date')->placeholder('-- Select End Date --')->required() !!}--}}
    {{--<x-metabase question="3" :params="$params"></x-metabase>--}}
    {{--<x-volt-breadcrumb>--}}
    {{--    <x-volt-item><a href="#dd">Foo</a></x-volt-item>--}}
    {{--    <x-volt-item>Store</x-volt-item>--}}
    {{--    <x-volt-item>T-shirt</x-volt-item>--}}
    {{--</x-volt-breadcrumb>--}}

    <x-slot name="actions">
        <x-volt-link-button
            :url="route('home')"
            icon="plus"
            label="Button Label"
        />
    </x-slot>

    {{--<x-volt-tab>--}}
    {{--    <x-volt-tab-content title="foo">foo</x-volt-tab-content>--}}
    {{--    <x-volt-tab-content title="bar">bar</x-volt-tab-content>--}}
    {{--    <x-volt-tab-content title="baz" active="true">baz</x-volt-tab-content>--}}
    {{--</x-volt-tab>--}}

    {{--<x-volt-tab>--}}
    {{--    <x-volt-tab-content title="foo">foo</x-volt-tab-content>--}}
    {{--    <x-volt-tab-content title="bar" active="true">bar</x-volt-tab-content>--}}
    {{--    <x-volt-tab-content title="baz" class="basic">baz</x-volt-tab-content>--}}
    {{--</x-volt-tab>--}}

</x-volt-app>

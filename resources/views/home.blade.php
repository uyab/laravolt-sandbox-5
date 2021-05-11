<x-laravolt::layout.app title="Home">

    {!! form()->open() !!}
    {!! form()->boolean('boolean')->value(1)->label('Boolean') !!}
    {!! form()->close() !!}
    {{--<livewire:chart.active-users/>--}}

    {{--<div class="ui equal width grid">--}}
    {{--    <div class="row">--}}
    {{--        <div class="column">--}}
    {{--            <livewire:chart.active-users-area/>--}}
    {{--        </div>--}}
    {{--        <div class="column">--}}
    {{--            <livewire:chart.active-users-area type="line"/>--}}
    {{--        </div>--}}
    {{--        <div class="column">--}}
    {{--            <livewire:chart.active-users-area type="area"/>--}}
    {{--        </div>--}}
    {{--    </div>--}}
    {{--</div>--}}

    {{--<div class="ui equal width grid">--}}
    {{--    <div class="row">--}}
    {{--        <div class="column">--}}
    {{--            <livewire:chart.users-by-gender/>--}}
    {{--        </div>--}}
    {{--        <div class="column">--}}
    {{--            <livewire:chart.active-users/>--}}
    {{--        </div>--}}
    {{--    </div>--}}
    {{--</div>--}}

</x-laravolt::layout.app>

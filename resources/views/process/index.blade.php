<x-laravolt::layout.app title="Process Definitions">

    <x-laravolt::cards>
        <x-laravolt::card>
            <x-slot name="content">
                {!! form()->post(route('process.store'))->multipart() !!}
                {!! form()->uploader('file')->ajax(false)->label('Deploy New Process') !!}
                {!! form()->submit('Deploy') !!}
                {!! form()->close() !!}
            </x-slot>
        </x-laravolt::card>
        @foreach($processDefinitions as $definition)
            <x-laravolt::card meta.before="{{$definition->key}}" :title="$definition->name">
                <x-laravolt::card-footer right='<i class="icon trash"></i>' />
            </x-laravolt::card>
        @endforeach
    </x-laravolt::cards>


</x-laravolt::layout.app>

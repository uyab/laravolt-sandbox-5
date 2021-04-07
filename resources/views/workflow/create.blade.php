<x-laravolt::layout.app title="{{ $processDefinition->name }}">

    <x-laravolt::panel title="Mulai Proses Baru" icon="rocket">
        {!! form()->post(route('workflow.store'))->multipart()->horizontal() !!}
        {!! form()->hidden('_process_definition', $processDefinition->key) !!}
        {!! form()->make($formDefinition)->render() !!}
        {!! form()->action(form()->submit('Simpan')) !!}
        {!! form()->close() !!}
    </x-laravolt::panel>

</x-laravolt::layout.app>

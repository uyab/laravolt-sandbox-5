<x-laravolt::layout.app title="Foo">

    @if($task)
    <x-laravolt::panel title="{{ $task->name }}" icon="rocket">
        {!! form()->post(route('workflow.task.store'))->multipart()->horizontal() !!}
        {!! form()->hidden('_task_id', $task->id) !!}
        {!! form()->hidden('_task_key', $task->taskDefinitionKey) !!}
        {!! form()->make($formDefinition)->render() !!}
        {!! form()->action(form()->submit('Simpan')) !!}
        {!! form()->close() !!}
    </x-laravolt::panel>
    @endif

</x-laravolt::layout.app>

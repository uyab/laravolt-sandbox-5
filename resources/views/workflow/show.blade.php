<x-laravolt::layout.app title="Foo">
    <div style="">
        @foreach($completedForms as $formName)
            <x-laravolt::panel title="{{ $formName }}" icon="badge-check">
                {!! form()->make(config('forms.'.$formName))->bindValues($rekrutmen)->display() !!}
            </x-laravolt::panel>
        @endforeach

        @if($task)
            <x-laravolt::panel title="{{ $task->name }}" icon="tasks">
                {!! form()->post(route('workflow.task.store'))->multipart()->horizontal() !!}
                {!! form()->hidden('_task_id', $task->id) !!}
                {!! form()->hidden('_task_key', $task->taskDefinitionKey) !!}
                {!! form()->make($formDefinition)->render() !!}
                {!! form()->action(form()->submit('Simpan')) !!}
                {!! form()->close() !!}
            </x-laravolt::panel>
        @endif
    </div>

</x-laravolt::layout.app>

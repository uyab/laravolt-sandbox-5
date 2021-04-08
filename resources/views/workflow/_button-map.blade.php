<?php

$taskNames = [];
$tasks = \Laravolt\Camunda\Models\ProcessInstance::find($id)->tasks();
foreach ($tasks as $task) {
    $taskNames[] = $task->taskDefinitionKey;
}
$url = route('process.xml', $id);
?>

<button class="ui basic blue button {{ $class ?? '' }}" camunda-map-button>
    <i class="icon project diagram"></i> {{ $label ?? 'Lihat Diagram' }}
</button>

@once
    @push('body')
        <div class="ui fullscreen overlay modal" camunda-map-modal>
            <i class="close icon"></i>
            <div class="header">
                Process {{ $id ?? '' }}
            </div>
            <div class="content" camunda-map-diagram style="cursor: move">
                <div class="ui active inverted dimmer" camunda-diagram-loader>
                    <div class="ui indeterminate elastic text loader">Memuat Diagram Proses</div>
                </div>
            </div>
        </div>
        <style>
            .highlight:not(.djs-connection) .djs-visual > :nth-child(1) {
                fill: {{ config('laravolt.ui.colors.'.config('laravolt.ui.color')) }} !important; /* color elements as green */
            }

            .highlight-overlay {
                background-color: {{ config('laravolt.ui.colors.'.config('laravolt.ui.color')) }}; /* color elements as green */
                opacity: 0.4;
                pointer-events: none; /* no pointer events, allows clicking through onto the element */
                border-radius: 10px;
            }
        </style>
        <script src="https://unpkg.com/bpmn-js@5.1.2/dist/bpmn-navigated-viewer.development.js"></script>

        <script>
            $(function () {

                $('[camunda-map-modal]').modal({
                    onVisible: function (a, b, c) {
                        $('[camunda-map-diagram]').height('100%');

                        // load + show diagram
                        $.get("{{ $url }}", showDiagram, 'text');
                    }
                });

                // Show the modal
                $('[camunda-map-modal]').modal('attach events', '[camunda-map-button]', 'show');

                // Render diagram
                var viewer = new BpmnJS({
                    container: '[camunda-map-diagram]'
                });
                var canvas = viewer.get('canvas');
                var zoomLevel = 'fit-viewport';

                function showDiagram(diagramXML) {
                    viewer.importXML(diagramXML, function () {
                        var overlays = viewer.get('overlays');
                        var elementRegistry = viewer.get('elementRegistry');

                        canvas.zoom(zoomLevel);

                        // Option 1: Color via Overlay
                        var shap = "";
                        var $overlayHtml = "";
                        @foreach ($taskNames as $task)
                            shape = elementRegistry.get('{{$task}}');
                        $overlayHtml = $('<div class="highlight-overlay">').css({
                            width: shape.width,
                            height: shape.height
                        });
                        overlays.add(
                            '{{$task}}',
                            {
                                position: {
                                    top: 0,
                                    left: 0
                                },
                                html: $overlayHtml
                            });
                        @endforeach
                    });

                    $('[camunda-diagram-loader]').removeClass('active');
                }

                $('[camunda-map-diagram]').on('click', function () {
                    if (zoomLevel == 1) {
                        zoomLevel = 'fit-viewport';
                    } else {
                        zoomLevel = 1;
                    }
                    canvas.zoom(zoomLevel);
                });

            });
        </script>
    @endpush
@endonce

<?php

return [
    'process_definition_key' => 'proc_bl_rekrutmen',
    'name' => 'Rekrutmen Pegawai',
    'table' => \App\Http\Livewire\ApplicantTables::class,
    'subscribers' => [\App\Subscribers\RekrutmenSubscriber::class],
    'tasks' => [
        'StartEvent_1' => [
            'form'  => 'forms.rekrutmen.start',
        ],
        'act_reviewDataDiri' => [
            'form'  => 'forms.rekrutmen.act_reviewDataDiri',
        ],
    ],
];

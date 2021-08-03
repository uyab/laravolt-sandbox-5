<?php

return [
    'process_definition_key' => 'proc_bl_rekrutmen',
    'name' => 'Rekrutmen Pegawai',
    'tasks' => [
        'StartEvent_1' => [
            'form_schema' => [
                'full_name' => [
                    'type' => 'text',
                    'label' => 'Nama Pelamar',
                ],
            ],
        ],
    ],
];

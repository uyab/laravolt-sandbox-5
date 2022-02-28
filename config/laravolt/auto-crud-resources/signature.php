<?php

return [
    'label' => 'Signature',
    'model' => \App\Models\Signature::class,
    'schema' => [
        [
            'type' => 'text',
            'name' => 'nama',
            'label' => 'Nama',
            'sortable' => false,
            'searchable' => true,
            'rules' => ['required'],
        ],
        [
            'type' => 'text',
            'name' => 'jabatan',
            'label' => 'Jabatan',
            'rules' => ['required'],
        ],
        [
            'type' => Laravolt\Fields\Field::BELONGS_TO,
            'name' => 'company',
            'sortable' => 'name',
            'searchable' => 'name',
            'label' => 'Company',
            'rules' => ['required'],
        ],
        [
            'type' => 'uploader',
            'name' => 'tanda_tangan',
            'label' => 'Tanda Tangan',
            'limit' => 1,
            'as_array' => false,
            'rules' => ['required'],
        ],
    ],
];

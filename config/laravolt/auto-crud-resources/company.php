<?php

return [
    'label' => 'Company',
    'model' => \App\Models\Company::class,
    'schema' => [
        [
            'name' => 'name',
            'type' => 'text',
            'label' => 'Company Name',
            'limit' => 4,
            'rules' => ['required'],
        ],
    ],
];

<?php

return [
    'routes' => [
        'enabled' => true,
        'middleware' => ['web', 'auth'],
        'prefix' => 'resource',
    ],
    'view' => [
        'layout' => 'laravolt::layouts.app',
    ],
    'menu' => [
        'enabled' => true,
        'label' => 'Master Data',
    ],
    'permission' => \Laravolt\Platform\Enums\Permission::MANAGE_SYSTEM,
    'resources' => [
        'signature' => [
            'label' => 'Signature',
            'model' => \App\Models\Signature::class,
            'schema' => [
                [
                    'type' => 'text',
                    'name' => 'nama',
                    'label' => 'Nama',
                    'rules' => ['required'],
                ],
                [
                    'type' => 'text',
                    'name' => 'jabatan',
                    'label' => 'Jabatan',
                    'rules' => ['required'],
                ],
                \Laravolt\Fields\BelongsTo::make(\App\Models\Company::class)
                    ->name('company_id')
                    ->rules(['required'])
                    ->query('select id, name from companies')
                    ->display(function (\App\Models\Signature $signature) {
                        return $signature->company->name;
                    }),
                [
                    'type' => 'uploader',
                    'name' => 'tanda_tangan',
                    'label' => 'Tanda Tangan',
                    'limit' => 1,
                    'as_array' => false,
                    'rules' => ['required'],
                    'visibility' => [
                        'index' => false,
                    ],
                ],
            ],
        ],
        'company' => [
            'label' => 'Company',
            'model' => \App\Models\Company::class,
            'schema' => [
                [
                    'name' => 'name',
                    'type' => 'text',
                    'label' => 'Company Name',
                ],
            ],
        ],
    ],
];

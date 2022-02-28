<?php

return [
    'label' => 'Product',
    'model' => \App\Models\User::class,
    'schema' => [
        [
            'name' => 'name',
            'show_on_create' => true,
            'type' => \Laravolt\Fields\Field::TEXT,
            'label' => 'Nama Produk',
        ],
        [
            'name' => 'description',
            'type' => \Laravolt\Fields\Field::TEXTAREA,
            'label' => 'Description',
        ],
    ],
];

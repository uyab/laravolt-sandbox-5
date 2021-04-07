<?php
return [
    [
        'type' => 'text',
        'name' => 'nama',
        'label' => 'Nama Pelamar',
    ],
    [
        'type' => 'email',
        'name' => 'email',
        'label' => 'Email',
    ],
    [
        'type' => 'text',
        'name' => 'nomor_handphone',
        'label' => 'Nomor Handphone',
    ],
    [
        'type' => 'dropdownDB',
        'name' => 'domisili',
        'label' => 'Domisil',
        'query' => 'select name as id, name from indonesia_cities',
        'query_key_column' => 'id',
        'query_display_column' => 'name',
        'placeholder' => 'Pilih Kabupaten/Kota'
    ],
    [
        'type' => 'uploader',
        'name' => 'dokumen_pendukung',
        'label' => 'Dokumen Pendukung',
    ],
];

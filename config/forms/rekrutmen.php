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
        'type' => 'dropdown',
        'name' => 'domisili',
        'label' => 'Domisil',
        'options' => ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur'],
    ],
    [
        'type' => 'uploader',
        'name' => 'dokumen_pendukung',
        'label' => 'Dokumen Pendukung',
    ],
];

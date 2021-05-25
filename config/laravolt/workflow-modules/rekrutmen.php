<?php

return [
    'process_definition_key' => 'proc_bl_rekrutmen',
    'name' => 'Rekrutmen Pegawai',
    'table' => \App\Http\Livewire\Tables\ApplicantTables::class,
    'table_variables' => ['full_name', 'job_title'],
    'tasks' => [
        'StartEvent_1' => [
            'form_schema' => [
                'job_id' => ['type' => 'dropdown', 'label' => 'Posisi ID', 'options' => [1 => 'Programmer PHP']],
                'full_name' => ['type' => 'text', 'label' => 'Fullname'],
                'email' => ['type' => 'email', 'label' => 'Email Address', 'required' => true],
                'phone' => ['type' => 'text', 'label' => 'Phone'],
                'current_company' => ['type' => 'text', 'label' => 'Current Company'],
                'birth_day' => ['type' => 'datepicker', 'label' => 'Birth Day'],
                'birth_place' => ['type' => 'text', 'label' => 'Birth Place'],
                'latest_education' => ['type' => 'text', 'label' => 'Latest Education'],
                'male' => [
                    'type' => 'radioGroup',
                    'label' => 'Jenis Kelamin',
                    'options' => ['L' => 'Laki-laki', 'P' => 'Perempuan'],
                ],
                'join_date' => [
                    'type' => 'dropdown',
                    'label' => 'Join Date',
                    'options' => ['Immediately' => 'Immediately', 'One Month Notice' => 'One Month Notice'],
                ],
                'current_address' => ['type' => 'textarea', 'label' => 'Current Address'],
                'about' => ['type' => 'textarea', 'label' => 'About'],
                'portofolio' => ['type' => 'text', 'label' => 'Portofolio URL'],
                'linkedin_profile' => ['type' => 'text', 'label' => 'Linkedin Profile'],
                'sumber_lamaran' => ['type' => 'text', 'label' => 'How do you know this opportunity?'],
                'resume_cv' => ['type' => 'uploader', 'label' => 'Resume/CV'],
                'additional_information' => ['type' => 'redactor', 'label' => 'Additional Information'],
            ],
            'listeners' => [
                \Laravolt\Workflow\Events\ProcessInstanceStarting::class => [
                    \App\Listeners\AttachJobTitle::class,
                ],
            ],
        ],
        'act_reviewDataDiri' => [
            'form_schema' => [
                'isTesPsikologi' => [
                    'type' => 'checkbox',
                    'label' => 'Tes Psikologi',
                ],
                'isTesTeknis' => [
                    'type' => 'checkbox',
                    'label' => 'Tes Teknis',
                ],
                'isTesCoderbyte' => [
                    'type' => 'checkbox',
                    'label' => 'Tes Coderbyte',
                ],
                'isvalid' => [
                    'type' => 'boolean',
                    'label' => 'Is Valid?',
                    'value' => 1,
                ],
            ],
            'listeners' => [
                \Laravolt\Workflow\Events\TaskCompleting::class => [
                    \App\Listeners\AttachEppsSessionId::class,
                ],
            ],
        ],
        'act_apakahWawancaraDiterima' => [
            'form_schema' => [
                [
                    'type' => 'text',
                    'name' => 'full_name',
                    'label' => 'Nama Lengkap Pelamar',
                ],
            ],
        ],
        'act_inputHasilWawancara' => [
            'form_schema' => [
                [
                    'type' => 'text',
                    'name' => 'full_name',
                    'label' => 'Nama Lengkap Pelamar',
                ],
            ],
        ],
        'act_konfirmCoderbyte' => [
            'form_schema' => [
                'link_report_coderbyte' => [
                    'type' => 'text',
                    'label' => 'Hasil Coderbyte',
                ],
            ],
        ],
        'act_konfirmPsikologSelesai' => [
            'form_schema' => [
                'personalities_file' => [
                    'type' => 'text',
                    'label' => 'Personality',
                ],
                'temubakat_file' => [
                    'type' => 'text',
                    'label' => 'Temu Bakat',
                ],
            ],
        ],
        'act_konfirmTeknisSelesai' => [
            'form_schema' => [
                'jawaban_tes_teknis' => [
                    'type' => 'text',
                    'label' => 'Jawaban',
                ],
                'tes_teknis_file' => [
                    'type' => 'uploader',
                    'label' => 'File',
                ],
            ],
        ],
        'act_menyiapkanSoalTeknis' => [
            'form_schema' => [
                'link_teknis' => [
                    'type' => 'text',
                    'label' => 'Link Soal',
                ],
            ],
        ],
        'act_pilihSoalCoderbyte' => [
            'form_schema' => [
                'link_coderbyte' => [
                    'type' => 'text',
                    'label' => 'Link Soal Coderbyte',
                ],
            ],
        ],
        'act_reviewTesPsikolog' => [
            'form_schema' => [
                'hasil_tes_psikolog' => [
                    'type' => 'redactor',
                    'label' => 'Review',
                ],
                'rekomendasi_tes_psikolog' => [
                    'type' => 'boolean',
                    'label' => 'Apakah Anda Merekomendasikan?',
                ],
            ],
        ],
        'act_reviewTesTeknis' => [
            'form_schema' => [
                'hasil_tes_teknis' => [
                    'type' => 'redactor',
                    'label' => 'Review',
                ],
                'rekomendasi_tes_teknis' => [
                    'type' => 'boolean',
                    'label' => 'Apakah Anda Merekomendasikan?',
                ],
            ],
        ],
        'act_undangWawancara' => [
            'form_schema' => [
                'isInvited' => [
                    'type' => 'boolean',
                    'label' => 'Apakah Kandidat Diterima?',
                ],
                'date_interview' => [
                    'type' => 'datepicker',
                    'label' => 'Tanggal Wawancara',
                ],
                'concall_url' => [
                    'type' => 'text',
                    'label' => 'Link Concall',
                ],
                'description_interview' => [
                    'type' => 'textarea',
                    'label' => 'Keterangan',
                ],
            ],
        ],
    ],
];

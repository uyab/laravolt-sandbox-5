<?php

return [
    'process_definition_key' => 'dynamic-approval',
    'name' => 'Document Approval',
    // 'table' => \App\Http\Livewire\Tables\ApplicantTables::class,
    'table_variables' => ['title'],
    'tasks' => [
        'start' => [
            'form_schema' => [
                'title' => ['type' => 'text', 'label' => 'Document Title'],
                'reviewers' => [
                    'label' => 'Reviewers',
                    'type' => 'dropdownDB',
                    'query' => 'select id, name from users limit 5',
                    'multiple' => true,
                ],
                'approvers' => [
                    'label' => 'Approvers',
                    'type' => 'dropdownDB',
                    'query' => 'select id, name from users limit 5 offset 6',
                    'multiple' => true,
                ],
                'ack' => [
                    'label' => 'Acknowledgement',
                    'type' => 'dropdownDB',
                    'query' => 'select id, name from users limit 2 offset 9',
                    'multiple' => true,
                ],
            ],
        ],
        'review' => [
            'form_schema' => [
                'status_review' => [
                    'type' => 'dropdown',
                    'options' => ['approved' => 'Approved', 'rejected' => 'Rejected'],
                    'label' => 'Decision',
                ],
            ],
        ],
        'fix_request' => [
            'form_schema' => [
                'comment' => [
                    'type' => 'text',
                    'label' => 'Fixing Remark',
                ],
            ],
        ],
        'approval' => [
            'form_schema' => [
                'status_approval' => [
                    'type' => 'dropdown',
                    'options' => ['approved' => 'Approved', 'rejected' => 'Rejected'],
                    'label' => 'Decision',
                ],
            ],
        ],
        'acknowledgement' => [
            'form_schema' => [
                'remark' => [
                    'type' => 'textarea',
                    'label' => 'Remark',
                ],
            ],
        ],
    ],
];

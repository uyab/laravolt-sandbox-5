<?php

return [
    'Workflow' => [
        'menu' => [
            'Rekrutment' => [
                'route' => ['workflow::module.instances.index', 'rekrutmen'],
                'icon'  => 'user-tie'
            ],
            'Document List' => [
                'route' => ['workflow::module.instances.index', 'dynamic-approval'],
                'icon'  => 'inbox'
            ],
            // 'New Approval' => [
            //     'url' => 'workflow/module/dynamic-approval/instances/create',
            //     'icon'  => 'plus'
            // ],
            // 'Forms' => [
            //     'route' => 'forms.index',
            //     'icon' => 'pager'
            // ],
        ],
    ],
];

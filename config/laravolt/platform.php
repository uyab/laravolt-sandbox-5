<?php

return [
    'middleware' => ['web', 'auth'],
    'features' => [
        'auto-crud' => true,
        'epilog' => false,
        'database-monitor' => false,
        'epicentrum' => true,
        'mailkeeper' => false,
        'lookup' => false,
        'kitchen_sink' => false,
        'onlyoffice' => true,
        'turbolinks' => false,
        'quick_switcher' => true,
        'registration' => true,
        'verification' => true,
        'captcha' => false,
        'workflow' => false,
    ],
];

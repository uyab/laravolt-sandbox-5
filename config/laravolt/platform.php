<?php

return [
    'middleware' => ['web', 'auth'],
    'features' => [
        'epilog' => false,
        'database-monitor' => false,
        'epicentrum' => true,
        'mailkeeper' => false,
        'lookup' => true,
        'kitchen_sink' => false,
        'turbolinks' => false,
        'quick_switcher' => true,
        'registration' => true,
        'verification' => true,
        'captcha' => false,
        'workflow' => true,
    ],
];

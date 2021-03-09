<?php

use Modules\User\Controllers\UserController;

Route::group(
    [
        'prefix' => config('modules.user.route.prefix'),
        'as' => 'modules::',
        'middleware' => config('modules.user.route.middleware'),
    ],
    function () {
        Route::resource('user', UserController::class);
    }
);

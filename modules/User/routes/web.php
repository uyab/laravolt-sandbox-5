<?php

use Modules\User\Controllers\UserController;

Route::group(
    [
        'prefix' => config('modules.user.routes.prefix'),
        'as' => 'modules::',
        'middleware' => config('modules.user.routes.middleware'),
    ],
    function () {
        Route::resource('user', UserController::class);
    }
);

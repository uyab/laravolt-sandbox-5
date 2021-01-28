<?php

use Modules\KodeRegistrasi\Controllers\KodeRegistrasiController;

Route::group(
    [
        'prefix' => config('modules.kode-registrasi.route.prefix'),
        'as' => 'modules::',
        'middleware' => config('modules.kode-registrasi.route.middleware'),
    ],
    function () {
        Route::resource('kode-registrasi', KodeRegistrasiController::class);
    }
);

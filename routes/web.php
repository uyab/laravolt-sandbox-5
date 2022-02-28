<?php

use App\Http\Controllers\Home;

Route::redirect('/', 'auth/login');

Route::middleware(['auth', 'verified'])
    ->group(
        function () {
            Route::get('/home', Home::class)->name('home');
            Route::resource('permohonan', \App\Http\Controllers\PermohonanController::class);
        }
    );

include __DIR__.'/auth.php';
include __DIR__.'/my.php';

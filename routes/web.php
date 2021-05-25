<?php

use App\Http\Controllers\Home;

Route::redirect('/', 'auth/login');
Route::get('/home', Home::class)->name('home')->middleware('auth', 'verified');
Route::view('welcome', 'welcome');
include __DIR__.'/auth.php';
include __DIR__.'/my.php';

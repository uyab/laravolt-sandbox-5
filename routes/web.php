<?php

use App\Http\Controllers\Home;

Route::redirect('/', 'auth/login');
Route::get('/home', Home::class)->name('home')->middleware('auth', 'verified');

include __DIR__.'/auth.php';
include __DIR__.'/my.php';

Route::middleware('auth')->group(function(){
    Route::resource('workflow', \App\Http\Controllers\WorkflowController::class);
    Route::resource('process', \App\Http\Controllers\ProcessController::class);
    Route::resource('forms', \App\Http\Controllers\FormController::class);

    Route::post('workflow/task', \App\Http\Controllers\SubmitTask::class)->name('workflow.task.store');
});

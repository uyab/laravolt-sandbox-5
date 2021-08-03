<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Laravolt\Camunda\Http\ProcessDefinitionClient;
use Laravolt\Camunda\Models\ProcessDefinition;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // app('laravolt.menu.builder')->register(config('menu.dummy'));
    }
}

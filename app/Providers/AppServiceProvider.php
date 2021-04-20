<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
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
        // View::composer(
        //     'laravolt::menu.sidebar',
        //     function () {
        //         $processDefinitions = ProcessDefinition::getList();
        //         if ($processDefinitions) {
        //             foreach ($processDefinitions as $definition) {
        //                 $menu[$definition->name]['order'] = 1;
        //                 $menu[$definition->name]['menu'] = [];
        //                 $menu[$definition->name]['menu'] = [
        //                     'New' => ['route' => ['workflow.create', ['processDefinition' => $definition->key]], 'icon' => 'plus'],
        //                     'List' => ['route' => ['workflow.index', ['processDefinition' => $definition->key]], 'icon' => 'th-list'],
        //                 ];
        //             }
        //
        //             $this->app['laravolt.menu.builder']->loadArray($menu);
        //         }
        //     }
        // );
    }
}

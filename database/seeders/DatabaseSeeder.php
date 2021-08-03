<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Laravolt\Camunda\Http\ProcessDefinitionClient;
use Laravolt\Workflow\Entities\Module;
use Laravolt\Workflow\Models\ProcessDefinition;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Artisan::call('laravolt:admin Administrator admin@laravolt.dev asdf1234');
        // foreach (Module::discover() as $module) {
        //     ProcessDefinition::importFromCamunda(ProcessDefinitionClient::get(['key' => $module->processDefinitionKey]));
        // }
    }
}

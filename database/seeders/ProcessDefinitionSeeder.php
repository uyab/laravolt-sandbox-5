<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Laravolt\Camunda\Http\ProcessDefinitionClient;

class ProcessDefinitionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Laravolt\Workflow\Models\ProcessDefinition::truncate();
        $processDefinitions = ProcessDefinitionClient::get(['latestVersion' => true]);
        foreach ($processDefinitions as $definition) {
            \Laravolt\Workflow\Models\ProcessDefinition::create(
                [
                    'id' => $definition->id,
                    'name' => $definition->name,
                    'key' => $definition->key,
                    'version' => $definition->version,
                ]
            );
        }
    }
}

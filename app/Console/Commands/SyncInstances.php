<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laravolt\Camunda\Http\ProcessInstanceClient;
use Laravolt\Workflow\Models\ProcessDefinition;
use Laravolt\Workflow\Models\ProcessInstance;

class SyncInstances extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'laravolt:workflow:sync-instances';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync process instances between Camunda REST API and application database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $definitions = ProcessDefinition::pluck('key');
        if ($definitions->isNotEmpty()) {
            foreach ($definitions as $key) {
                $instances = ProcessInstanceClient::get(['processDefinitionKey' => $key]);

                $bar = $this->getOutput()->createProgressBar(count($instances));

                foreach ($instances as $instance) {
                    $variables = ProcessInstanceClient::variables($instance->id);
                    $tasks = ProcessInstanceClient::tasks($instance->id);
                    ProcessInstance::updateOrCreate(
                        ['id' => $instance->id],
                        [
                            'definition_id' => $instance->definitionId,
                            'definition_key' => $key,
                            'tasks' => $tasks,
                            'variables' => $variables,
                        ]
                    );
                    $bar->advance();
                }
                $bar->finish();
            }
        }

        return 0;
    }
}

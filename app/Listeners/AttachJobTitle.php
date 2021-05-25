<?php

namespace App\Listeners;

use Laravolt\Workflow\Events\ProcessInstanceStarting;
use Laravolt\Workflow\Events\TaskCompleting;

class AttachJobTitle
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProcessInstanceStarting $event)
    {
        $jobTitle = $event->form->schema['job_id']['options'][$event->form->data['job_id']];
        $event->form->modifyVariables(
            function ($variables) use ($jobTitle) {
                $variables['job_title'] = ['value' => $jobTitle];

                return $variables;
            }
        );
    }
}

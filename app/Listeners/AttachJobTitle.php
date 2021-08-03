<?php

namespace App\Listeners;

use Laravolt\Workflow\Events\ProcessInstanceStarting;

class AttachJobTitle
{
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

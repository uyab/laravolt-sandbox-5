<?php

namespace App\Listeners;

use Laravolt\Workflow\Events\TaskCompleting;

class AttachEppsSessionId
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
    public function handle(TaskCompleting $event)
    {
        $event->form->modifyVariables(
            function ($variables) {
                $variables['sessionId'] = ['value' => 41];

                return $variables;
            }
        );
    }
}

<?php

namespace App\Subscribers;

use Illuminate\Events\Dispatcher;
use Laravolt\Workflow\Events\TaskSubmitting;

class RekrutmenSubscriber
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(TaskSubmitting::class, [self::class, 'attachEppsSessionId']);
    }

    public function attachEppsSessionId(TaskSubmitting $event)
    {
        if ($event->task->taskDefinitionKey === 'act_reviewDataDiri') {
            $event->form->modifyVariables(
                function ($variables) {
                    $variables['sessionId'] = ['value' => 41];

                    return $variables;
                }
            );
        }
    }
}

<?php

namespace App\Subscribers;

use Illuminate\Events\Dispatcher;
use Laravolt\Workflow\Events\TaskCompleting;

class RekrutmenSubscriber
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(TaskCompleting::class, [self::class, 'attachEppsSessionId']);
    }

    public function attachEppsSessionId(TaskCompleting $event)
    {
        if ($event->task->taskDefinitionKey === 'act_reviewDataDiri') {
            $event->form->modifyVariables(
                function ($variables) {
                    $variables['sessionId'] = ['value' => 41];

                    return $variables;
                }
            );
        }

        if ($event->task->taskDefinitionKey === 'act_undangWawancara') {
            $event->form->modifyVariables(
                function ($variables) use ($event) {
                    $variables['date_interview'] = ['value' => '2021-01-01 10:00'];
                    $variables['emailTo'] = ['value' => $event->instance->variables->getValue('email')];

                    return $variables;
                }
            );
        }
    }
}

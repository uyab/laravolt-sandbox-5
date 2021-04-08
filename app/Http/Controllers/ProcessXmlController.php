<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Laravolt\Camunda\Models\ProcessDefinition;
use Laravolt\Camunda\Models\ProcessInstance;

class ProcessXmlController
{
    public function __invoke($id)
    {
        $processInstance = ProcessInstance::find($id);
        $xml = ProcessDefinition::find($processInstance->definitionId)->xml();

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}

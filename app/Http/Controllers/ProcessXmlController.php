<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Laravolt\Camunda\Http\ProcessDefinitionClient;
use Laravolt\Camunda\Http\ProcessInstanceClient;

class ProcessXmlController
{
    public function __invoke($id)
    {
        $processInstance = ProcessInstanceClient::find($id);
        $xml = ProcessDefinitionClient::xml($processInstance->definitionId);

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}

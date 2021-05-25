<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Chart;

class TestChart extends Chart
{
    public string $title = 'TestChart';

    public string $type = self::LINE;

    public function series(): array
    {
        return [
            'series-1' => [
                'Label 1' => 10,
                'Label 2' => 14,
                'Label 3' => 40
            ],
        ];
    }
}

<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Chart;

class FooBarBaz extends Chart
{
    public string $title = 'FooBarBaz';

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

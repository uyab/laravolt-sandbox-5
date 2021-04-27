<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Chart;

class ActiveUsersArea extends Chart
{
    public string $type = self::BAR;

    public int $height = 100;

    protected bool $sparkline = true;

    public string $title = 'Trend User Active';

    public function series(): array
    {
        return [
            'registered' => [10, 40, 85, 120, 170, 150, 12, 12, 35, 23, 35, 99, 89],
        ];
    }
}

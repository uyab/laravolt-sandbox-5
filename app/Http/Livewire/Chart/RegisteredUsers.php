<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Chart;

class RegisteredUsers extends Chart
{
    public string $type = self::BAR;

    public function series(): array
    {
        return [
            'registered' => [10, 40, 85, 120, 170, 150],
            'active' => [2, 30, 25, 50, 70, 120],
        ];
    }

    public function labels(): array
    {
        return ['Januari', 'Feb', 'Maret', 'April', 'Mei', 'Juni'];
    }
}

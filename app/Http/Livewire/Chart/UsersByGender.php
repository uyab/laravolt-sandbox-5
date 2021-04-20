<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Donut;

class UsersByGender extends Donut
{
    public function series(): array
    {
        return ['Male' => 100, 'Female' => 20, 'None' => 4];
    }
}

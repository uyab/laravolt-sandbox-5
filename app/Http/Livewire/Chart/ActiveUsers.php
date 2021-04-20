<?php

namespace App\Http\Livewire\Chart;

use Laravolt\Charts\Chart;

class ActiveUsers extends Chart
{
    public string $title = 'Active Users';

    public string $type = self::LINE;

    public function series(): array
    {
        return [
            'registered' => ['Januari' => 10, 'Feb' => 14, 'Maret' => 40, 'April' => 6, 'Mei' => 55, 'Juni' => 44],
        ];
    }

    public function options(): array
    {
        $options = parent::options();

        return $options;
    }
}

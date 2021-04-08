<?php

namespace App\Http\Filters;

use Laravolt\UiComponent\Filters\DropdownFilter;

class CurrentTaskFilter extends DropdownFilter
{
    protected string $label = 'Current Task';

    public function apply($data, $value)
    {
        if ($value) {
            $data->where('current_task', $value);
        }

        return $data;
    }

    public function options(): array
    {
        return [
            0 => 'Semua',
            'review_administrasi' => 'Review Administrasi',
            'wawancara' => 'Wawancara',
        ];
    }
}

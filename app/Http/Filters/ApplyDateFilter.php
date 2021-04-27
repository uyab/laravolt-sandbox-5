<?php

namespace App\Http\Filters;

use Laravolt\Ui\Filters\DateFilter;

class ApplyDateFilter extends DateFilter
{
    protected string $label = 'Tanggal Daftar';

    public function apply($data, $value)
    {
        if ($value) {
            $data->whereDate('created_at', $value);
        }

        return $data;
    }
}

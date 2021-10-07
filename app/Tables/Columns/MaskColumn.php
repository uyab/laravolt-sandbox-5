<?php

namespace App\Tables\Columns;

use Laravolt\Suitable\Columns\Column;
use Laravolt\Suitable\Columns\ColumnInterface;

class MaskColumn extends Column implements ColumnInterface
{
    public function cell($cell, $collection, $loop)
    {
        return \Str::mask($cell->{$this->field});
    }
}

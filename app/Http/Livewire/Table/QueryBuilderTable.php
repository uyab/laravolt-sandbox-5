<?php

namespace App\Http\Livewire\Table;

use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class QueryBuilderTable extends TableView
{
    public function data()
    {
        return \DB::table('users')->whereNull('email');
    }

    public function columns(): array
    {
        return [
            Text::make('name'),
            Text::make('email'),
        ];
    }
}

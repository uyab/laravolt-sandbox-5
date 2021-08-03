<?php

namespace App\Http\Livewire\Table;

use App\Models\User;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class PaginationTable extends TableView
{
    public function data()
    {
        return User::paginate();
    }

    public function columns(): array
    {
        return [
            Text::make('name')
        ];
    }

    public function filters(): array
    {
        return [
            // TODO: define your filters here
        ];
    }
}

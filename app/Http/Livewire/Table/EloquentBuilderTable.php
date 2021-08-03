<?php

namespace App\Http\Livewire\Table;

use App\Models\User;
use Laravolt\Suitable\Columns\Date;
use Laravolt\Suitable\Columns\DateTime;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class EloquentBuilderTable extends TableView
{
    public function data()
    {
        return User::query()->paginate(5);
    }

    public function columns(): array
    {
        return [
            Text::make('name'),
            Text::make('email'),
            DateTime::make('created_at'),
        ];
    }
}

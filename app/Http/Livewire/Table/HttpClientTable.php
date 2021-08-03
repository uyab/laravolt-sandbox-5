<?php

namespace App\Http\Livewire\Table;

use Illuminate\Support\Facades\Http;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class HttpClientTable extends TableView
{
    public function data()
    {
        return Http::get('https://jsonplaceholder.typicode.com/users');
    }

    public function columns(): array
    {
        return [
            Text::make('name'),
            Text::make('email'),
        ];
    }
}

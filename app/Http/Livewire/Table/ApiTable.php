<?php

namespace App\Http\Livewire\Table;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class ApiTable extends TableView
{
    private PendingRequest $httpClient;

    public function mount()
    {
        $this->httpClient = Http::baseUrl('https://reqres.in');
    }

    public function data()
    {
        $data = $this->httpClient->get('api/users')->collect('data');

        return $data;
    }

    public function columns(): array
    {
        return [
            Text::make('id'),
            Text::make('email'),
        ];
    }
}

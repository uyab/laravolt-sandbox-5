<?php

namespace App\Http\Livewire\Table;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Http;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Ui\TableView;

class PermohonanTable extends TableView
{
    const PER_PAGE = 2;

    public function data()
    {
        $client = Http::baseUrl('10.10.10.107:7979');
        $query = [
            'page' => $this->page - 1,
            'limit' => self::PER_PAGE,
        ];
        $data = $client->get('bpmn/permohonan', $query)->json('data');
        $pagination = new LengthAwarePaginator($data['content'], $data['totalElements'], self::PER_PAGE, $this->page);

        return $pagination;
    }

    public function columns(): array
    {
        return [
            Text::make('name')
        ];
    }
}

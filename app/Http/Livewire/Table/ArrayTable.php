<?php

namespace App\Http\Livewire\Table;

use App\Models\User;
use Laravolt\Suitable\Columns\Dropdown;
use Laravolt\Suitable\Columns\Html;
use Laravolt\Suitable\Columns\Raw;
use Laravolt\Suitable\Columns\RestfulButton;
use Laravolt\Suitable\Columns\RowNumber;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Suitable\Columns\View;
use Laravolt\Ui\TableView;

class ArrayTable extends TableView
{
    public function data()
    {
        return User::query()->paginate();
        // return [
        //     ['bio' => '<b>Strong</b> <i>foo</i> <script>alert("foo")</script>'],
        // ];
    }

    public function columns(): array
    {
        return [
            Text::make('name'),
            Text::make('email'),
            Dropdown::make(function (Dropdown $dropdown, $data) {
                $dropdown
                    ->item('Detail', route('epicentrum::users.show', $data->id), 'eye')
                    ->divider()
                    ->item('Delete', route('epicentrum::users.show', $data->id), 'trash');
            })->addClass('simple'),
        ];
    }
}

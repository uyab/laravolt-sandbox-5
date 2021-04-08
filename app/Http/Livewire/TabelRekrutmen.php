<?php

namespace App\Http\Livewire;

use App\Http\Filters\ApplyDateFilter;
use App\Http\Filters\CurrentTaskFilter;
use App\Models\Rekrutmen;
use App\Models\User;
use Laravolt\Suitable\Columns\Label;
use Laravolt\Suitable\Columns\Numbering;
use Laravolt\Suitable\Columns\Button;
use Laravolt\Suitable\Columns\Text;
use Laravolt\UiComponent\Livewire\Base\TableView;

class TabelRekrutmen extends TableView
{
    public function data()
    {
        $sortPayload = [
            'sort' => $this->sort,
            'direction' => $this->direction,
        ];

        $query = Rekrutmen::query()->latest()->autoSort('sort', 'direction', $sortPayload);

        $keyword = trim($this->search);
        if ($keyword !== '') {
            $query->whereLike(['nama', 'email'], $keyword);
        }

        return $query;
    }

    public function columns(): array
    {
        return [
            Numbering::make('No'),
            Label::make('duration', '')->addClass('green'),
            Text::make('nama'),
            Text::make('email'),
            Text::make('domisili'),
            Text::make('current_task'),
            Button::make('permalink', ''),
        ];
    }

    public function filters(): array
    {
        return [
            new CurrentTaskFilter(),
            new ApplyDateFilter(),
        ];
    }
}

<?php

namespace App\Http\Livewire\Tables;

use Laravolt\Suitable\Columns\Button;
use Laravolt\Suitable\Columns\Date;
use Laravolt\Suitable\Columns\Numbering;
use Laravolt\Suitable\Columns\Raw;
use Laravolt\Ui\TableView;
use Laravolt\Workflow\Models\ProcessInstance;

class ApplicantTables extends TableView
{
    public function data()
    {
        $query = ProcessInstance::query()
            ->whereHas('definition')
            ->autoSort($this->sortPayload())
            ->latest();

        if ($this->search) {
            $query->whereLike(
                [
                    'variables->full_name->value',
                    'variables->email->value',
                    'variables->job_title->value'
                ],
                $this->search
            );
        }

        return $query;
    }

    public function columns(): array
    {
        return [
            Numbering::make('No'),
            Raw::make(fn ($item) => $item->variables->getValue('full_name', '-'), 'Nama'),
            Raw::make(fn ($item) => $item->variables->getValue('email', '-'), 'Email'),
            Raw::make(fn ($item) => $item->variables->getValue('job_title', '-'), 'Posisi'),
            Date::make('created_at', 'Apply Date'),
            Button::make(fn ($item) => route('workflow::module.instances.show', ['rekrutmen', $item->id]), 'Action')->icon('eye'),
        ];
    }

    public function filters(): array
    {
        return [
            // TODO: define your filters here
        ];
    }
}

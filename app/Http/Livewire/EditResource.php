<?php

namespace App\Http\Livewire;

use Livewire\Component;

class EditResource extends Component
{
    public string $key;

    public function render()
    {
        return view('livewire.edit-resource');
    }
}

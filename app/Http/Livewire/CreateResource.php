<?php

namespace App\Http\Livewire;

use Illuminate\Auth\Access\AuthorizationException;
use Livewire\Component;

class CreateResource extends Component
{
    public string $key;

    public function render()
    {
        // throw new AuthorizationException();
        return view('livewire.create-resource');
    }
}

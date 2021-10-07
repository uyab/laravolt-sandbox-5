<?php

namespace App\Http\Livewire;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class DeleteResource extends Component
{
    use AuthorizesRequests;

    public string $key;

    public function delete()
    {
        throw new AuthorizationException();
        $this->emit('closeModal', 2);
    }

    public function render()
    {
        return view('livewire.delete-resource');
    }
}

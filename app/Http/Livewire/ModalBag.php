<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Log;
use Livewire\Component;

class ModalBag extends Component
{
    public ?string $activeModal;

    public array $modals = [];

    protected $listeners = ['openModal'];

    public function resetState(): void
    {
        $this->modals = [];
        $this->activeModal = null;
    }

    public function openModal($modal): void
    {
        $id = $modal.'-'.md5($modal);

        $this->modals[$id] = [
            'name' => $modal,
        ];

        $this->activeModal = $id;

        $this->emit('activeModalChanged', $id);
    }

    public function render()
    {
        return view('livewire.modal-bag');
    }
}

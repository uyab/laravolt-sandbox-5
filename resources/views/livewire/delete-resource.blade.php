<div class="ui modal small visible active top aligned transition scale in"
     x-show="activeModal == '{{ $key }}'"
     x-ref="{{ $key }}"
>
    <i class="close icon" @click="close()"></i>
    <div class="header">Delete</div>
    <div class="content">
        <div class="description">
            <button class="ui button" wire:click="delete" wire:loading.class="loading">Delete User</button>
        </div>
    </div>
</div>

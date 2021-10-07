<div class="ui modal small visible active top aligned transition scale in"
     x-show="activeModal == '{{ $key }}'"
     x-ref="{{ $key }}"
>
    <i class="close icon" @click="close()"></i>
    <div class="header">EDIT</div>
    <div class="content">
        <div class="description">
            <input type="text">
            <button onclick="Livewire.emit('openModal', 'delete-resource')">
                Delete User
            </button>
        </div>
    </div>
</div>

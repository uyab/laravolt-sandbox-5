<div class="ui modal small visible active top aligned transition scale in"
     x-show="activeModal == '{{ $key }}'"
     x-ref="{{ $key }}"
>
    <i class="close icon" @click="close()"></i>
    <div class="header">ADD</div>
    <div class="content">
        <div class="description">
            {!! form()->open() !!}
            {!! form()->text('text')->label('Text') !!}
            {!! form()->dropdown('dropdown', ['satu', 'dua'])->label('Dropdown') !!}
            {!! form()->close() !!}
        </div>
        <button onclick="Livewire.emit('openModal', 'edit-resource')">
            Edit User
        </button>
    </div>
</div>

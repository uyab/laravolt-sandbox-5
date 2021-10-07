<div id="livewireUIModalContainer">
    <script src="{{ asset('js/modal.js') }}?d={{ time() }}"></script>

    <div
        x-data="LivewireUIModal()"
        x-init="init()"
        x-on:close.stop="show = false"
        x-on:keydown.escape.window="closeModalOnEscape()"
        x-on:keydown.tab.prevent="$event.shiftKey || nextFocusable().focus()"
        x-on:keydown.shift.tab.prevent="prevFocusable().focus()"
        x-show="show || loading"
        :class="show ? '' : ''"
        class="ui dimmer modals page"
    >

        @forelse($components as $id => $component)
            <div x-show.immediate="activeComponent == '{{ $id }}'" x-ref="{{ $id }}"
                 class="ui modal top aligned visible active transition scale in"
            >
                <i class="close icon" @click="closeModal()"></i>
                @livewire($component['name'], $component['attributes'], key($id))
            </div>
        @empty
        @endforelse
    </div>
</div>

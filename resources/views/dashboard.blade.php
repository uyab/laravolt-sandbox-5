<x-laravolt::layout.app title="Dashboard">
    <div style="display: flex; min-height: 600px; align-items: center; justify-content: center; flex-direction: column">
        <h1 class="ui header centered">
            <x-laravolt::inspire/>
        </h1>

        <div>
            Check file <code class="ui label">{{ \App\Http\Controllers\Dashboard::class }}</code> to edit this page.
        </div>

    </div>
</x-laravolt::layout.app>

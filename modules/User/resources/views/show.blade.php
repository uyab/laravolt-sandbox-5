<x-laravolt::layout.app :title="'Detail User'">
    <x-laravolt::backlink url="{{ route('modules::user.index') }}"/>

    <x-laravolt::panel title="Detil User">
        <table class="ui table definition">
        <tr><td>Id</td><td>{{ $user->id }}</td></tr>
        <tr><td>Name</td><td>{{ $user->name }}</td></tr>
        <tr><td>Email</td><td>{{ $user->email }}</td></tr>
        <tr><td>Email Verified At</td><td>{{ $user->email_verified_at }}</td></tr>
        <tr><td>Password</td><td>{{ $user->password }}</td></tr>
        <tr><td>Remember Token</td><td>{{ $user->remember_token }}</td></tr>
        <tr><td>Created At</td><td>{{ $user->created_at }}</td></tr>
        <tr><td>Updated At</td><td>{{ $user->updated_at }}</td></tr>
        <tr><td>Status</td><td>{{ $user->status }}</td></tr>
        <tr><td>Timezone</td><td>{{ $user->timezone }}</td></tr>
        <tr><td>Password Changed At</td><td>{{ $user->password_changed_at }}</td></tr>
        </table>
    </x-laravolt::panel>
</x-laravolt::layout.app>
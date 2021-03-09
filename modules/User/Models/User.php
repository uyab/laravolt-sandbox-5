<?php

namespace Modules\User\Models;

use Illuminate\Database\Eloquent\Model;
use Laravolt\Suitable\AutoFilter;
use Laravolt\Suitable\AutoSearch;
use Laravolt\Suitable\AutoSort;

class User extends Model
{
    use AutoSearch, AutoSort, AutoFilter;

    protected $table = 'users';

    protected $guarded = [];

    protected $searchableColumns = ["name", "email", "status", "timezone", "email_verified_at", "password", "password_changed_at",];
}

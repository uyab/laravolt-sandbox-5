<?php

namespace Modules\KodeRegistrasi\Models;

use Illuminate\Database\Eloquent\Model;
use Laravolt\Support\Traits\AutoFilter;
use Laravolt\Support\Traits\AutoSearch;
use Laravolt\Support\Traits\AutoSort;

class KodeRegistrasi extends Model
{
    use AutoSearch, AutoSort, AutoFilter;

    protected $table = 'kode_registrasi';

    protected $guarded = [];

    protected $searchableColumns = ["kode",];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravolt\Suitable\AutoFilter;
use Laravolt\Suitable\AutoSearch;
use Laravolt\Suitable\AutoSort;

class Rekrutmen extends Model
{
    use HasFactory;
    // use AutoSearch;
    // use AutoSort;
    // use AutoFilter;

    protected $table = 'rekrutmen';

    protected $guarded = [];

    protected function getDurationAttribute()
    {
        $duration = $this->created_at->diffInDays();
        if ($duration === 0) {
            return 'New';
        }

        return $duration;
    }

    protected function getPermalinkAttribute()
    {
        return route('workflow.show', $this->process_instance_id);
    }
}

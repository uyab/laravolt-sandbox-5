<?php

declare(strict_types=1);

namespace App\Tables;

use Laravolt\Suitable\TableView;

class ApplicantTable extends TableView
{
    protected $title = 'ApplicantTable';

    protected function source()
    {
        // return Model::paginate();
    }

    protected function columns()
    {
        return [
            // See https://laravolt.dev/docs/suitable/
        ];
    }
}

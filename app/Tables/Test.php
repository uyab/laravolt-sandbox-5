<?php

declare(strict_types=1);

namespace App\Tables;

use Laravolt\Suitable\TableView;

class Test extends TableView
{
    protected $title = 'Test';

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

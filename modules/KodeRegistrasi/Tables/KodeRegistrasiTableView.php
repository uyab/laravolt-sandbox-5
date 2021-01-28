<?php

namespace Modules\KodeRegistrasi\Tables;

use Laravolt\Suitable\Columns\Numbering;
use Laravolt\Suitable\Columns\RestfulButton;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Suitable\TableView;
use Modules\KodeRegistrasi\Models\KodeRegistrasi;

class KodeRegistrasiTableView extends TableView
{
    public function source()
    {
        return KodeRegistrasi::autoSort()->latest()->autoSearch(request('search'))->paginate();
    }

    protected function columns()
    {
        return [
            Numbering::make('No'),
            Text::make('kode')->sortable(),
            RestfulButton::make('modules::kode-registrasi'),
        ];
    }
}

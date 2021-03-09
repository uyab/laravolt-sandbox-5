<?php

namespace Modules\User\Tables;

use Laravolt\Suitable\Columns\Numbering;
use Laravolt\Suitable\Columns\RestfulButton;
use Laravolt\Suitable\Columns\Text;
use Laravolt\Suitable\TableView;
use Modules\User\Models\User;

class UserTableView extends TableView
{
    protected $showPerPage = true;

    public function source()
    {
        return User::autoSort()->latest()->autoFilter()->autoSearch(request('search'))->paginate();
    }

    protected function columns()
    {
        return [
            Numbering::make('No'),
            Text::make('name')->sortable(),
            Text::make('email')->sortable(),
            Text::make('status')->sortable(),
            Text::make('timezone')->sortable(),
            RestfulButton::make('modules::user'),
        ];
    }
}

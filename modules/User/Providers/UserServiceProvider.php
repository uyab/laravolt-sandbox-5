<?php

namespace Modules\User\Providers;

use Illuminate\Database\Eloquent\Factory;
use Laravolt\Support\Base\BaseServiceProvider;

class UserServiceProvider extends BaseServiceProvider
{
    public function getIdentifier()
    {
        return 'user';
    }

    public function register()
    {
        $file = $this->packagePath("config/{$this->getIdentifier()}.php");
        $this->mergeConfigFrom($file, "modules.{$this->getIdentifier()}");
        $this->publishes([$file => config_path("modules/{$this->getIdentifier()}.php")], 'config');

        $this->config = collect(config("modules.{$this->getIdentifier()}"));
    }

    protected function menu()
    {
        app('laravolt.menu.sidebar')->register(function ($menu) {
            $menu->modules
                ->add('User', route('modules::user.index'))
                ->data('icon', 'circle')
                ->data('permission', $this->config['permission'] ?? [])
                ->active('modules/user/*');
        });
    }
}

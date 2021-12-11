<?php namespace Marcefalb\Shop;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            "Marcefalb\Shop\Components\Products" => "Products",
            "Marcefalb\Shop\Components\Types" => "Types",
        ];
    }

    public function registerSettings()
    {
    }

    public function registerFormWidgets()
    {
        return [
            'Marcefalb\Shop\FormWidgets\Types' => [
                'label' => 'Types',
                'code'  => 'types'
            ]
            ];
    }
}

<?php namespace Marcefalb\Shop\Models;

use Model;

/**
 * Model
 */
class Products extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'marcefalb_shop_products';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [
        'image_1' => 'System\Models\File',
        'image_2' => 'System\Models\File',
        'image_3' => 'System\Models\File',
    ];
}

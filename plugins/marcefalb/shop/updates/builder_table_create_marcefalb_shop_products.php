<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateMarcefalbShopProducts extends Migration
{
    public function up()
    {
        Schema::create('marcefalb_shop_products', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name');
            $table->integer('type')->unsigned();
            $table->integer('price')->unsigned();
            $table->string('company');
            $table->text('brief_specifications');
            $table->text('full_specifications');
            $table->boolean('is_in_stock');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('marcefalb_shop_products');
    }
}

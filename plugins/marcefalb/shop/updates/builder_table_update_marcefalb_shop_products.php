<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMarcefalbShopProducts extends Migration
{
    public function up()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->string('type', 191)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->integer('type')->nullable(false)->unsigned()->default(null)->change();
        });
    }
}

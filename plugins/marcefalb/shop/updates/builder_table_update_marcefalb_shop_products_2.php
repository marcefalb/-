<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMarcefalbShopProducts2 extends Migration
{
    public function up()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->integer('number_in_stock')->unsigned()->default(0);
            $table->dropColumn('is_in_stock');
        });
    }
    
    public function down()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->dropColumn('number_in_stock');
            $table->boolean('is_in_stock');
        });
    }
}

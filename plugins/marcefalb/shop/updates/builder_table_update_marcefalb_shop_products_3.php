<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMarcefalbShopProducts3 extends Migration
{
    public function up()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->integer('number_sold')->unsigned()->default(0);
        });
    }
    
    public function down()
    {
        Schema::table('marcefalb_shop_products', function($table)
        {
            $table->dropColumn('number_sold');
        });
    }
}

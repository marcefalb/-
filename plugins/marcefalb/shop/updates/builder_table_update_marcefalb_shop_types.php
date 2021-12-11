<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMarcefalbShopTypes extends Migration
{
    public function up()
    {
        Schema::table('marcefalb_shop_types', function($table)
        {
            $table->smallInteger('description');
        });
    }
    
    public function down()
    {
        Schema::table('marcefalb_shop_types', function($table)
        {
            $table->dropColumn('description');
        });
    }
}

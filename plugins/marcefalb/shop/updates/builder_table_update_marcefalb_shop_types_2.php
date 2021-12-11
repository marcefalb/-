<?php namespace Marcefalb\Shop\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateMarcefalbShopTypes2 extends Migration
{
    public function up()
    {
        Schema::table('marcefalb_shop_types', function($table)
        {
            $table->string('description', 191)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('marcefalb_shop_types', function($table)
        {
            $table->smallInteger('description')->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}

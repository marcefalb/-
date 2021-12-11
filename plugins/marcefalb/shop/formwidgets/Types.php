<?php namespace Marcefalb\Shop\FormWidgets;

use Config;
use Backend\Classes\FormWidgetBase;
use Marcefalb\Shop\Models\Types as TypesModal;

class Types extends FormWidgetBase
{
  public function widgetDetails() {
    return [
      'name' => 'Types',
      'description' => 'Types'
    ];
  }

  public function render() {
    $this -> vars['name'] = $this -> getFieldName();
    $this -> vars['value'] = $this -> getLoadValue();
    $types = TypesModal::all();
    foreach($types as $type) {
      $typesArr[] = $type->name;
    }
    $this -> vars['types'] = $typesArr ?? ['Нет типов'];

    return $this -> makePartial('widget');
  }
}

?>
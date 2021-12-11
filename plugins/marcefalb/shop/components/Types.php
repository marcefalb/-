<?php namespace Marcefalb\Shop\Components;

use Request;
use Cms\Classes\ComponentBase;
use Marcefalb\Shop\Models\Types as TypesModel;

class Types extends ComponentBase {
  public $types;

  public function componentDetails() {
    return [
      "name" => "Types",
      "description" => "Types"
    ];
  }

  public function onRun() {
    $this->route($this->page->url);
  }

  public function route($route) {
    switch ($route) {
      case '/spisok-tovarov':
        $this->getAllTypes();
        break;
      case '/':
        $this->getAllTypes();
        break;
      case '/tipy-komplektuyushchih':
        $this->getAllTypes();
        break;
    }
  }
  
  public function getAllTypes() {
    $this->types = TypesModel::all();
  }
}
?>
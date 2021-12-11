<?php 
  class Search {
    public function search($items) {
      // $inputValue = Input::get('search');
  
      // $newArr = [];
  
      // if ($inputValue) {
      //   // foreach($items as $item) {
      //   //   if (mb_stripos($item->name, $inputValue) !== false) {
      //   //     $newArr[] = $product;
      //   //   }
      //   // }

      //   $items->filter()->all();
      // }
      // else {
      //   $newArr = $items;
      // }
      
      $items->filter()->all();
      return $items;
    }
  }
?>


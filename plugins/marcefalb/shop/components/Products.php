<?php namespace Marcefalb\Shop\Components;
use Request;
use Redirect;
use Input;
use Cookie;
use Session;
use Cms\Classes\ComponentBase;
use Marcefalb\Shop\Models\Products as ProductsModel;

class Products extends ComponentBase {
  public $products;
  public $productsCount;
  public $popularProducts;
  public $newProducts;

  public $favArray;
  public $cartArray;

  public $currentType;

  public $sort;
  public $search;

  public $cookies;

  public $favsList;
  public $cartList;

  public function componentDetails() {
    return [
      "name" => "Products",
      "description" => "Products"
    ];
  }

  public function onRun() {
    $this->route($this->page->url);
    
  }

  public function route($route) {
    switch ($route) {
      case '/spisok-tovarov':
        $this->listPage();
        break;
      case '/izbrannoe':
        $this->getCock();
        break;
      case '/':
        $this->popularList();
        $this->newList();
        break;
      case '/korzina': 
        $this->getCart();
    }
  }

  
  public function listPage() {
    $type = Request::get("type");
    if ($type) {
      $products = ProductsModel::where("type", $type)->get();
      $this->currentType = $type;
    }
    else 
      $products = ProductsModel::all();
    $searchProducts = $this->productsSearch($products);
    $sortProducts = $this->priceSort($searchProducts);
    if ($this->search || $this->sort)
      $this->productsCount = count($sortProducts);
    else 
      $this->productsCount = $sortProducts->count();
    $this->products = $sortProducts;
  }

  public function popularList() {
    $products = ProductsModel::orderBy('number_sold', 'desc')->take(4)->get();
    $this->popularProducts = $products;
  }

  public function newList(){
    $products = ProductsModel::orderBy('created_at', 'desc')->take(3)->get();
    $this->newProducts = $products;
  }

  public function priceSort($products) {
    $sortedProducts = [];
    foreach($products as $product) {
      $sortedProducts[] = $product;
    }
    
    $prices = [];
    foreach($products as $key => $row) {
      $prices[$key] = intval($row["price"]);
    }

    $this->sort = Request::get("sort");
    if ($this->sort == "Сначала дешевые") array_multisort($prices, SORT_ASC, $sortedProducts);
    else if ($this->sort == "Сначала дорогие") array_multisort($prices, SORT_DESC, $sortedProducts);
    else return $products;

    return $sortedProducts;
  }

  public function productsSearch($products) {   
    $this->search = Request::get('search');
    if ($this->search) {      
      return $products->filter(function($item) {
        return mb_stripos($item->name, $this->search);
      })->all();
    }
    else return $products;
  }

  public function onSaveFav() {
    // $post = post();
    // $id = $post['id'];
    // $time = time()+60*60*24*30;
  
    // $favCookies = Cookie::get('favs');
    // $this->favArray = explode(',', $favCookies);
    // array_push($this->favArray, $id);
    // Cookie::queue("favs", implode(',', $this->favArray), $time);

    // // $cook = Cookie::get('favs');
    // return explode(',', Cookie::get('favs'));
  }
  
  public function onSaveCart() {
    // $post = post();
    // $id = $post['id'];
    // $time = time()+60*60*24*30;

    // Cookie::queue("cart", $id, $time);
  }

  public function getCock()
  {
    if (isset($_COOKIE['favs'])) {
      $products = ProductsModel::all();
      $favsCookies = json_decode($_COOKIE['favs'], true);
      $favArr = [];

      foreach($favsCookies as $cookie) {
        foreach($products as $product) {
          if ($product->id == $cookie) {
            array_push($favArr, $product);
          }
        }
      }

      $this->favsList = array_reverse($favArr);
    }
    else {
      return;
    }
  }

  public function getCart()
  {
    if (isset($_COOKIE['cart'])) {
      $products = ProductsModel::all();
      $cartCookies = json_decode($_COOKIE['cart'], true);
      $cartArr = [];

      foreach($cartCookies as $cookie) {
        foreach($products as $product) {
          if ($product->id == $cookie) {
            array_push($cartArr, $product);
          }
        }
      }
      
      $this->cartList = array_reverse($cartArr);
    }
    else {
      return;
    }
  }
}
?>
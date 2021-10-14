const $btn = document.getElementById("btn-hamburger");
const $menu = document.getElementById("navigator");
const $games =  document.querySelectorAll(".header__item--game");
const $news =  document.querySelectorAll(".header__item--new");
const $reviews =  document.querySelectorAll(".header__item--review");
const $videos =  document.querySelectorAll(".header__item--video");
const $gears =  document.querySelectorAll(".header__item--gear");

document.addEventListener("click", (e) => {
  const $target = e.target;
  if ($target.matches("#btn-hamburger *") || e.target.matches("#btn-hamburger")) {
    $btn.classList.toggle("is-active");
    $menu.classList.toggle("header__navigator--active");
  }else if($target.matches("#game") ){        
    $games.forEach(el=>el.classList.toggle("header__item--active"));

  }else if($target.matches("#news")){
    $news.forEach(el => el.classList.toggle("header__item--active"));

  }else if($target.matches("#review")){
    $reviews.forEach(el => el.classList.toggle("header__item--active"));

  }else if($target.matches("#videos")){
    $videos.forEach(el => el.classList.toggle("header__item--active"));    

  }else if($target.matches("#gear")){    
    $gears.forEach(el => el.classList.toggle("header__item--active"));
  }

});



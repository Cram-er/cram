$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});







/* 
pruebas
*/

$(".button").click(function() {
          $(".cuerpo", this).toggle(200);
    $(".sub").css('text-align', 'center');
    $(".titlekis").css('text-align', 'center');
});


/* 
GRID 1 


$('.items').columnsToJs({

  gap: 20// default 20

});



$('.items').columnsToJs({

 

  // the number of divs

  count: 3,

 

  // arrange as optimally as possible

  fixed:true,

 

  // stacking accuracy

  check: 10,

 
  // refresh interval

  interval:false,

 

  // debug mode

  debug:false

   

});
*/

/* 
Insert Comment 

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 400
});

*/



function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}


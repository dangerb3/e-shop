$(".custom-checkbox").on('change', ()=>{
  console.log($(".custom-checkbox").is(':checked'));
  if($(".custom-checkbox").is(':checked')){
    $(".orders-accordion__item").addClass("orders-accordion__item_show");
  } else {
    $(".orders-accordion__item").removeClass("orders-accordion__item_show");
  }
});
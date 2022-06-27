
$('input[name="deliveryType"]').on('change',()=>{
var value = $('input[name="deliveryType"]:checked').val();
console.log(value);
if(value==='delivery'){
  console.log('hhh')
  $(".delivery-self").addClass('d-none');
  $(".delivery-points").addClass("d-none");
} else{
  $(".delivery-self").removeClass("d-none");
  $(".delivery-points").removeClass("d-none");
}
})
var value = $('input[name="deliveryType"]:checked').val();
if (value === "delivery") {
  console.log("hhh");
  $(".delivery-self").addClass("d-none");
  $(".delivery-points").addClass("d-none");
} else {
  $(".delivery-self").removeClass("d-none");
  $(".delivery-points").removeClass("d-none");
}

$('input[name="type"]').on("change", () => {
  var value = $('input[name="type"]:checked').val();
  console.log(value);
  if (value === "legal") {
    console.log("hhh");
    $(".person-form").addClass("d-none");
    $(".company-form").removeClass("d-none");
  } else {
    $(".person-form").removeClass("d-none");
    $(".company-form").addClass("d-none");
  }
});
var value = $('input[name="type"]:checked').val();
 if (value === "legal") {
   console.log("hhh");
   $(".person-form").addClass("d-none");
   $(".company-form").removeClass("d-none");
 } else {
   $(".person-form").removeClass("d-none");
   $(".company-form").addClass("d-none");
 }
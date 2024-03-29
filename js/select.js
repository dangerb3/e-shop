jQuery(document).ready(function () {
  //Pagination JS
  //how much items per page to show
  var show_per_page = 8;
  //getting the amount of elements inside pagingBox div
  function ff(show_per_page) {
    var number_of_items = $("#pagingBox").children().size();
    //calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items / show_per_page);
    $("#current_page").val(0);
    $("#show_per_page").val(show_per_page);
    var navigation_html =
      '<a class="previous_link" href="javascript:previous();"><i class="fa fa-angle-left"></i></a>';
    var current_link = 0;
    while (number_of_pages > current_link) {
      navigation_html +=
        '<a class="page_link" href="javascript:go_to_page(' +
        current_link +
        ')" longdesc="' +
        current_link +
        '">' +
        (current_link + 1) +
        "</a>";
      current_link++;
    }
    navigation_html +=
      '<a class="next_link" href="javascript:next();"><i class="fa fa-angle-right"></i></a>';

    $("#page_navigation").html(navigation_html);

    //add active_page class to the first page link
    $("#page_navigation .page_link:first").addClass("active_page");

    //hide all the elements inside pagingBox div
    $("#pagingBox").children().css("display", "none");

    //and show the first n (show_per_page) elements
    $("#pagingBox").children().slice(0, show_per_page).css("display", "block");
  }
  ff(show_per_page);
    $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).next().fadeOut();
      } else {
        $(".select__head").removeClass("open");
        $(".select__list").fadeOut();
        $(this).addClass("open");
        $(this).next().fadeIn();
      }
    });

    $(".select").on("click", ".select__item", function () {
      $(".select__head").removeClass("open");
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).attr("data-attr"));
      var show_per_page = $(".select__input").val();
      console.log(show_per_page);
      ff(show_per_page);
    });
    //getting the amount of elements inside pagingBox div

    $(document).click(function (e) {
      if (!$(e.target).closest(".select").length) {
        $(".select__head").removeClass("open");
        $(".select__list").fadeOut();
      }
    });
  //set the value of our hidden input fields
});

//Pagination JS

function previous() {
  new_page = parseInt($("#current_page").val()) - 1;
  //if there is an item before the current active link run the function
  if ($(".active_page").prev(".page_link").length == true) {
    go_to_page(new_page);
  }
}

function next() {
  new_page = parseInt($("#current_page").val()) + 1;
  //if there is an item after the current active link run the function
  if ($(".active_page").next(".page_link").length == true) {
    go_to_page(new_page);
  }
}
function go_to_page(page_num) {
  //get the number of items shown per page
  var show_per_page = parseInt($("#show_per_page").val());

  //get the element number where to start the slice from
  start_from = page_num * show_per_page;

  //get the element number where to end the slice
  end_on = start_from + show_per_page;

  //hide all children elements of pagingBox div, get specific items and show them
  $("#pagingBox")
    .children()
    .css("display", "none")
    .slice(start_from, end_on)
    .css("display", "block");

  /*get the page link that has longdesc attribute of the current page and add active_page class to it
	and remove that class from previously active page link*/
  $(".page_link[longdesc=" + page_num + "]")
    .addClass("active_page")
    .siblings(".active_page")
    .removeClass("active_page");

  //update the current page input field
  $("#current_page").val(page_num);
}


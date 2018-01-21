$(document).ready(function () {
  // clicking button with class "category-button"
  $(".category-button").click(function () {
    // get the data-filter value of the button
    var filterValue = $(this).attr('data-filter');

    // show all items
    if (filterValue == "all") {
      $(".all").show("slow");
    }
    else {
      // hide all items
      $(".all").not('.' + filterValue).hide("slow");
      // and then, show only items with selected data-filter value
      $(".all").filter('.' + filterValue).show("slow");
    }
  });

});

function myFunction() {
  document.getElementById("vdo-sydney").controls = false;
  document.getElementById("vdo-card").controls = false;

}

$("#main").click(function () {
  $("#mini-fab").toggleClass('hidden');
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$.material.init();


//form search
$(document).ready(function () {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
})
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-fab'));

//sidenavbar
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

$('.statistic-counter_two, .statistic-counter, .count-number').counterUp({
  delay: 10,
  time: 2000
});

function centerModal() {
  $(this).css('display', 'block');
  var $dialog = $(this).find(".modal-dialog");
  var offset = ($(window).height() - $dialog.height()) / 2;
  // Center modal vertically in window
  $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
  $('.modal:visible').each(centerModal);
});

$('#next-btn').click(function () {
  var link = $('.modal-body a');
  var number = parseInt(link.attr('title').match(/\S+$/));
  number++;
  if (number === 13) {
    number = 1;
  }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
});
$('#prev-btn').click(function () {
  var link = $('.modal-body a');
  var number = parseInt(link.attr('title').match(/\S+$/));
  number--;
  if (number === 0) {
    number = 12;
  }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
});

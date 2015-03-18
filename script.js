$('.container').on('click', function() {
  $this = $(this);

  if ($this.hasClass('active')) {
    $this
      .addClass('going-inactive');
    setTimeout(function () {
      $this
        .removeClass('active')
        .removeClass('loading')
        .removeClass('going-inactive');
    }, 750);
  } else {
    $this.addClass('active loading');
  }
});

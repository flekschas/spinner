$('.container').on('click', function() {
  $this = $(this);
  if (!$this[0].anim) {
    $this[0].anim = $this.find('.smil');
  }

  if ($this.hasClass('active')) {
    $this
      .addClass('going-inactive');
    setTimeout(function () {
      $this
        .removeClass('active')
        .removeClass('loading')
        .removeClass('going-inactive');
      for (var i = $this[0].anim.length; i--;) {
        $this[0].anim[i].endElement();
      }
    }, 750);
  } else {
    for (var i = $this[0].anim.length; i--;) {
      $this[0].anim[i].beginElement();
    }
    $this.addClass('active loading');
  }
});

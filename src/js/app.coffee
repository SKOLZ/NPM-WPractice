$(document).ready ->
  $("nav a[href^=\"#\"]").on "click", (event) ->
    target = $($(this).attr("href"))
    $('.nav li a').removeClass('active')
    $(this).addClass('active')
    if target.length
      console.log(target)
      event.preventDefault()
      $('html, body').animate { scrollTop: target.offset().top }, 1000
      return
  return

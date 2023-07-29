$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        event.preventDefault();
        var targetSection = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 1000);
    });

    // Skill bar animation
    $('.skill-item').each(function() {
        let skillValue = $(this).find('.skill-level').width();
        $(this).find('.skill-level').css('width', 0);
        $(this).find('.skill-level').animate({
            width: skillValue
        }, 2000);
    });
});
let themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', function(event){
  document.body.classList.toggle('dark-theme', event.target.checked);
});
// Smooth scrolling for anchor links
$('a[href^="#"]').on('click', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});

// Scroll reveal animation for sections
ScrollReveal().reveal('.animate__animated', {
  duration: 1000,
  distance: '30px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});

// Dark theme toggle
$('#themeSwitch').on('change', function() {
  $('body').toggleClass('dark-theme');
});

// Project and internship accordion
$('.header').on('click', function() {
  $(this).toggleClass('active');
  $(this).siblings('.content').slideToggle(300);
});

// Contact form submission
$('form').on('submit', function(event) {
  event.preventDefault();
  // Add code to handle form submission and display success message
});

var btns = document.querySelectorAll('.btn-toggle');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var desc = this.previousElementSibling;
        if (desc.style.display == 'none') {
            desc.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            desc.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
}

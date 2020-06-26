
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.section',
  slideSelector: '.slide',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  verticalCentered: true,
  scrollingSpeed: 900,
  anchors: ['section1', 'section2', 'section3'],
  menu: '#menu',
  scrollOverflow: true, fitToSection: true
});

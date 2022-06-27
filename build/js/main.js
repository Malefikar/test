$(document).ready(function () {
  var owl = $('#slider__list').owlCarousel({items: 4, autoWidth: true, loop: true, slideBy: 4, onInitialized: counter, onTranslated: counter});
  $(document).on('click', '.slider__arrow', function() {
    if ($(this).hasClass('slider__arrow--right')) {
      owl.trigger('next.owl.carousel');
    } else {
      owl.trigger('prev.owl.carousel');
    }
  });
  function counter(event) {
    if (!event.namespace) {
      return;
    }
    if (event.page.index != -1) {
        $('.slider__current-page').text( '0' + ((event.page.index / 4) + 1));
    }
  }
});

// scale

function range() {
  let val = $('.scale-skills__input').val();
  let cssVal = 'linear-gradient(90deg, #BFA4FF 0%, ';
  let years = '0';
  let projects = '0';

  switch(val) {
    case '0':
      cssVal = 'linear-gradient(90deg, #23364C 0%, #23364C 100%)';
    break;
    case '25':
      cssVal += '#FF4F72 25%, #23364C 25%, #23364C 100%)';
      years = '2';
      projects = '30';
    break;
    case '50':
      cssVal += '#FF4F72 25%, #FFC359 50%, #23364C 50%, #23364C 100%)';
      years = '5';
      projects = '150';
    break;
    case '75':
      cssVal += '#FF4F72 25%, #FFC359 50%, #FFC359 75%, #23364C 75%, #23364C 100%)';
      years = '12';
      projects = '269';
    break;
    case '100':
      years = '15';
      projects = '453';
    default:
      cssVal = 'linear-gradient(90deg, #BFA4FF 0%, #FF4F72 25%, #FFC359 50%, #FFC359 75%)';
  }
  $('.scale-skills__input').css('background', cssVal);
  $('.scale-skills__years .scale-skills__counter').text(years);
  $('.scale-skills__projects .scale-skills__counter').text(projects);
}

// ring

const circle = document.querySelector('.scale-skills__circle--first');
  const r = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * r;
  const input = document.querySelector('.scale-skills__input');

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }

  setProgress(75);

  input.addEventListener('input', function () {
    setProgress(input.value);
  });



  const circleTwo = document.querySelector('.scale-skills__circle--second');
  const rTwo = circleTwo.r.baseVal.value;
  const circumferenceTwo = 2 * Math.PI * rTwo;
  const inputTwo = document.querySelector('.scale-skills__input');

  circleTwo.style.strokeDasharray = `${circumferenceTwo} ${circumferenceTwo}`;
  circleTwo.style.strokeDashoffset = circumferenceTwo;

  function setProgressTwo(percent) {
    const offset = circumferenceTwo - percent / 100 * circumferenceTwo;
    circleTwo.style.strokeDashoffset = offset;
  }

  setProgressTwo(75);

  input.addEventListener('input', function () {
    setProgressTwo(input.value);
  });

  let modal = document.querySelector('.modal');
  let modalButton = document.querySelector('.modal__button');
  let modalHide = document.querySelector('.modal__button--return');


  modalButton.addEventListener('click', function () {
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
    } else {
      modal.classList.add('modal--closed');
      modal.classList.remove('modal--opened');
    }
  })

  modalHide.addEventListener('click', function () {
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
    } else {
      modal.classList.add('modal--closed');
      modal.classList.remove('modal--opened');
    }
  })

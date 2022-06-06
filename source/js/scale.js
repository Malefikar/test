function range() {
  let val = $('.scale-skills__input').val();
  let cssVal = 'linear-gradient(90deg, #BFA4FF 0%, ';
  switch(val) {
    case '0':
      cssVal = 'linear-gradient(90deg, #23364C 0%, #23364C 100%)';
    break;
    case '25':
      cssVal += '#FF4F72 25%, #23364C 25%, #23364C 100%)';
    break;
    case '50':
      cssVal += '#FF4F72 25%, #FFC359 50%, #23364C 50%, #23364C 100%)';
    break;
    case '75':
      cssVal += '#FF4F72 25%, #FFC359 50%, #FFC359 75%, #23364C 75%, #23364C 100%)';
    break;
    default:
      cssVal = 'linear-gradient(90deg, #BFA4FF 0%, #FF4F72 25%, #FFC359 50%, #FFC359 75%)';
  }
  $('.scale-skills__input').css('background', cssVal);
}



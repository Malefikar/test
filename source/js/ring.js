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

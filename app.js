
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
function timer() {
    let deadline = "2019-06-17";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // В t сейчас колличество миллисекунд дата дедлайн-дата сейчас и в миллесекунда с 1.1.1970  
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        // hoursmod = Math.floor((t/1000/60/60) % 24),
        // days  = Math.floor((t/(1000*60*60*24)));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {

                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        }

    }
    setClock('timer', deadline);


}
    timer();
});

// function calc() {
     
  
//     let persons = document.querySelectorAll('.counter-block-input')[0],
//         days = document.querySelectorAll('.counter-block-input')[1],
//         place = document.getElementById('select'),
//         totalValue = document.getElementById('total'),
//         personsSum = 0,
//         daySum = 0,
//         total = 0;

//     totalValue.innerHTML = 0;

//     persons.addEventListener('change', function () {
//         personsSum = +this.value;
//         total = (daySum + personsSum) * 4000;
//         if (days.value == '' ) {
//             totalValue.innerHTML = 0;

//         } else {
//             totalValue.innerHTML = total;
//         }
//     });
//     days.addEventListener('change', function () {
//         daySum = +this.value;
//         total = (daySum + personsSum) * 4000;
//         if (persons.value == '') {
//             totalValue.innerHTML = 0;

//         } else {
//             totalValue.innerHTML = total;
//         }
//     });

//     place.addEventListener('change', function () {
//         if (days.value == '' || persons.value == '') {
//             totalValue.innerHTML = 0;
//         } else {
//             let a = total;
//             totalValue.innerHTML = a*this.options[this.selectedIndex].value;
//         }
//     });
// }

(function ($) {
    $(function () {
             calculate();
             jQuery('#calculator input').keyup(function() {
              this.value = this.value.replace(/[^0-9\.,]/g, '');
              this.value = this.value.replace(/[,]/, '.');
          });
          jQuery('#calculator input, #calculator select').change(function() {
              calculate();
          });
          jQuery('#calculator input').keyup(function() {
              calculate();
          });
          function calculate() {
        $('.calculator').each(function(key, val){
          calcInputs = {};
              $(this).find('input, select').each(function(key, val){
                  name = $(this).attr('name');
                  val = $(this).val();
                  if (!$.isNumeric(val)) {
                      switch (name) {
                          case 'area':
                              val = 1;
                              break;
                          case 'corners':
                              val = 4;
                              break;
                          case 'lamp':
                              val = '';
                              break;
                          case 'tube':
                              val = '';
                              break;
                          case 'chandelier-hook':
                              val = '';
                              break;
                          default:
                              break;
                      }
                      $(this).val(val);
                  }
                  calcInputs[name] = val;
              });
   
              total = 0;
   
              switch (calcInputs.texture) {
                  case 'mat':
              total += calcInputs.area * 1;
              break;
                  case 'glossy':
              total += calcInputs.area * 20;
              break;
                  case 'satin':
              total += calcInputs.area * 30;
              break;
                  case 'color':
              total += calcInputs.area * 100;
              break;
              default:
              break;
              }
   
              // каждый угол
                  total += calcInputs.corners * 40;
   
              // установка люстры
              if (calcInputs['chandelier-hook'] >= 1) {
                  total += calcInputs['chandelier-hook'] * 500;
              }
              // установка встраемого светильника
              if (calcInputs.lamp >= 1) {
                  total += calcInputs.lamp * 350;
              }
              // обход трубы
              if (calcInputs.tube >= 1) {
                  total += calcInputs.tube * 300;
              }
   
          install = calcInputs.area * 170;
          total += install;
   
              total += ' руб.';
              jQuery(this).find('span.total').html(total);
        });
          }
   
      });
  })(jQuery);
  ;
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const day = dayInput.previousElementSibling;
const month = monthInput.previousElementSibling;
const year = yearInput.previousElementSibling;
const button = document.querySelector('button');
const textYear = document.querySelector('.year-result .dash').textContent;
const monthText = document.querySelector('.month-result .dash').textContent;
const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();
const yearResults = document.querySelector('.year-result .dash');
const monthResults = document.querySelector('.month-result .dash');
const currentMonth = new Date().getMonth() +1;
const dayResults = document.querySelector('.day-result .dash');
let flag1 = true;
let flag2 = true;
let flag3 = true;
const months = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };


  //BUTTON CLICK
  button.addEventListener('click', (e)=>{
    e.preventDefault();
 
    //YEAR
    if(yearInput.value > currentYear || yearInput.value==0){
        yearInput.classList.add('error-sign');
    year.classList.add('error-sign');
    yearInput.nextElementSibling.innerHTML = `
     <p class="error">Must be in the past</p>
    `;
    flag1 = false;
    }else{
        yearInput.classList.remove('error-sign');
        year.classList.remove('error-sign');
        yearInput.nextElementSibling.innerHTML = '';
        flag1 = true;
    }

    //MONTH
    if(monthInput.value > 12 || monthInput.value<1){
        monthInput.classList.add('error-sign');
        month.classList.add('error-sign');
        monthInput.nextElementSibling.innerHTML = `
        <p class="error">Must be a valid month</p>
        `;
         flag2 = false;
       }else{
        monthInput.classList.remove('error-sign');
        month.classList.remove('error-sign');
        monthInput.nextElementSibling.innerHTML = '';
        flag2 = true;
    }

    //DAYS
    if(dayInput.value> months[monthInput.value] || dayInput.value<1){
        dayInput.classList.add('error-sign');
        day.classList.add('error-sign');
        dayInput.nextElementSibling.innerHTML = `
        <p class="error">Must be a valid day</p>
        `;
        flag3 = false;
       }else{
        dayInput.classList.remove('error-sign');
        day.classList.remove('error-sign');
        dayInput.nextElementSibling.innerHTML = '';
        flag3 = true;

       }


       if(flag1===true && flag2===true && flag3===true){
        yearResults.textContent = currentYear - yearInput.value;

        if(monthInput.value>currentMonth){
            monthResults.textContent = 11 - (monthInput.value-currentMonth);
            yearResults.textContent = currentYear - yearInput.value-1;
        }
        if(monthInput.value==currentMonth && dayInput.value>currentDay){
            monthResults.textContent = 11;
            yearResults.textContent = currentYear - yearInput.value-1;
        }

        if(dayInput.value > currentDay){
            dayResults.textContent = months[currentMonth-1] - dayInput.value + currentDay;
            monthResults.textContent = currentMonth - monthInput.value -1;
            if(monthInput.value>currentMonth){
             monthResults.textContent = 11 - (monthInput.value-currentMonth);
             yearResults.textContent = currentYear - yearInput.value-1;
         }
         if(monthInput.value==currentMonth && dayInput.value>currentDay){
             monthResults.textContent = 11;
             yearResults.textContent = currentYear - yearInput.value-1;
         }
         } else if(dayInput.value == currentDay){
             dayResults.textContent = '0';
             monthResults.textContent = currentMonth - monthInput.value;
             if(monthInput.value>currentMonth){
                 monthResults.textContent = 11 - (monthInput.value-currentMonth);
                 yearResults.textContent = currentYear - yearInput.value-1;
             }
             if(monthInput.value==currentMonth && dayInput.value>currentDay){
                 monthResults.textContent = 11;
                 yearResults.textContent = currentYear - yearInput.value-1;
             }
         } else{
             dayResults.textContent = currentDay - dayInput.value;
             monthResults.textContent = currentMonth - monthInput.value;
             if(monthInput.value>currentMonth){
                 monthResults.textContent = 11 - (monthInput.value-currentMonth);
                 yearResults.textContent = currentYear - yearInput.value-1;
             }
             if(monthInput.value==currentMonth && dayInput.value>currentDay){
                 monthResults.textContent = 11;
                 yearResults.textContent = currentYear - yearInput.value-1;
             }
         }
       }

 });



 //DAY INPUT FORM VALIDATION RESET
dayInput.addEventListener('input',()=>{
    if(dayInput.value< months[monthInput.value] && dayInput.value>1){
        dayInput.classList.remove('error-sign');
        day.classList.remove('error-sign');
        dayInput.nextElementSibling.innerHTML = '';
    }
});

//MONTH INPUT FORM VALIDATION RESET
monthInput.addEventListener('input', ()=>{
    if(monthInput.value <= 12 && monthInput.value>=1){
        monthInput.classList.remove('error-sign');
        month.classList.remove('error-sign');
        monthInput.nextElementSibling.innerHTML = '';
    }
});

//YEAR INPUT FORM VALIDATION RESET
yearInput.addEventListener('input',()=>{
    if(yearInput.value <= currentYear && yearInput.value>=0){
        yearInput.classList.remove('error-sign');
        year.classList.remove('error-sign');
        yearInput.nextElementSibling.innerHTML = '';
    }
});

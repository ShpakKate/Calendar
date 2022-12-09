let nowDate = new Date();
let nowYear = nowDate.getFullYear();
let nowMonth = nowDate.getMonth();
let nowDays = nowDate.getDate();
let yearNum = document.querySelector('.year');
let monthName = document.querySelector('.month');
let daysContainer = document.querySelector('.days')
let prevMonth = document.getElementById('prev');
let nextMonth = document.getElementById('next');
let nameOfMonth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

function createCalendar(year, month) {
    let monthQuantity = new Date(year, month + 1, 0).getDate();
    let dayFirst = new Date(year, month, 1).getDay();
    let dayLast = new Date(year, month + 1, 0).getDay();
    let monthDays = '';

    let lastDate = new Date(year, month, 0).getDate();
    let arrOtherDate = [];
    let k = 0;

    monthName.textContent = nameOfMonth[month];
    
   

    function daysBefor () {
        
        for ( i = dayFirst; i > 0; i-- ) {
            arrOtherDate.unshift(lastDate);
            lastDate--;    
        };
       
        for ( i = 1; i < dayFirst; i++ ) {
            monthDays += '<li class="prev-day">' + arrOtherDate[k];
            k++;
        } 
    }

    function daysAfter () {
        k = 1;

        for ( i = dayLast; i <= 6 && i > 0; i++ ) {           
            monthDays += '<li class="prev-day">' + k;
            k++;  
        };
    }

    daysBefor();
 
    for ( i = 1; i <= monthQuantity; i++ ) {
        let week = new Date(year, month, i).getDay();

        if ( week == 0 || week == 6 ) {
            monthDays += '<li class="weekends">' + i;
        } else monthDays += '<li>' + i;
    }

    daysAfter();
    
    yearNum.textContent = year;
    daysContainer.innerHTML = monthDays;
}

createCalendar(nowYear, nowMonth);

prevMonth.addEventListener('click', () => {
    let curDate = new Date(yearNum.textContent,nameOfMonth.indexOf(monthName.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let stepMonth = curDate.getMonth();
    let stepYear = curDate.getFullYear();

    createCalendar(stepYear, stepMonth);
})

nextMonth.addEventListener('click', () => {
    let curDate = new Date(yearNum.textContent,nameOfMonth.indexOf(monthName.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let stepMonth = curDate.getMonth();
    let stepYear = curDate.getFullYear();

    createCalendar(stepYear, stepMonth);
})


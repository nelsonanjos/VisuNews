import React from 'react';

const Time = () => {

    let time = new Date();
    let day 
        = ((time.getDay() / 10) < 1) 
        ? "0" + time.getDay() 
        : time.getDay()
    ;
    let month 
        = ((time.getMonth() / 10) < 1) 
        ? "0" + (time.getMonth() +1) 
        : (time.getMonth() +1)
    ;

    let hours
        = ((time.getHours() / 10) < 1) 
        ? "0" + time.getHours() 
        : time.getHours()
    ;
    let minutes
        = ((time.getMinutes() / 10) < 1) 
        ? "0" + time.getMinutes() 
        : time.getMinutes()
    ;
    let seconds 
        = ((time.getSeconds() / 10) < 1) 
        ? "0" + time.getSeconds() 
        : time.getSeconds()
    ;

    let weekDay = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ];

    return (
        <div>
            <p id="week-day">{weekDay[time.getDay()]}</p>
            <p id="date">{
                `
                    ${day} /
                    ${month} /
                    ${time.getYear() + 1900}
                `
            }</p>

            <p id="hour">{
                `
                    ${hours} : 
                    ${minutes} :
                    ${seconds}
                `
            }</p>
        </div>
    )
};

export default Time;
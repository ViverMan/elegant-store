function timer() {
    // const endDate = new Date();
    // endDate.setDate(endDate.getDate() + 3); // например, 3 дня от текущей даты

    const endDate = new Date('March 29, 2024, 23:59:59');

    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    let timerInterval;

    function updateTimer() {

        const now = new Date();
        const timeDiffirence = endDate - now;

        if (timeDiffirence <= 0) {
            daysElement.innerText = '0';
            hoursElement.innerText = '0';
            minutesElement.innerText = '0';
            secondsElement.innerText = '0';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeDiffirence / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiffirence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiffirence % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiffirence % (1000 * 60)) / 1000);

        daysElement.innerText = days < 10 ? '0' + days : days;
        hoursElement.innerText = hours < 10 ? '0' + hours : hours;
        minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
    } 
    updateTimer(); // запускаем таймер при загрузке страницы

    setInterval(updateTimer, 1000); // Обновляем таймер каждую секунду 
     
};

export default timer;


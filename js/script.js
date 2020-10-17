window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent')

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadLine = '2020-10-21';

    function getTimeRemaining(endTime) {
        let total = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor((total / 1000 / 60 / 60) % 24),
            days = Math.floor((total / (1000 * 60 * 60 * 24)));

        return {
            'total': total,
            'days': days,
            'hour': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            let t = getTimeRemaining(endTime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hour);
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

    setClock('timer', deadLine);
});
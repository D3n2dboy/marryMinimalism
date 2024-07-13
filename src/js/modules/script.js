// Установить конечную дату и время
let dataMarry = '5 июля 2024 г.'
var countDownDate = new Date("Jul 18 , 2024 15:37:25").getTime();

// Обновлять таймер каждую секунду
var x = setInterval(function () {
    // Получить текущие дату и время
    var now = new Date().getTime();

    // Найти разницу между текущим временем и конечной датой
    var distance = countDownDate - now;

    // Рассчитать дни, часы, минуты и секунды
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отобразить результат в элементе с id="timer"
    document.getElementById("timer").innerHTML = `
                    <div class="time__items">
                            <div class="time__item">
                                <div class="time__number">
                                    ${days}
                                </div>
                                <div class="time__label">
                                    дней
                                </div>
                            </div>

                            <div class="time__item">
                                <div class="time__number">
                                    ${hours}
                                </div>
                                <div class="time__label">
                                    часов
                                </div>
                            </div>

                            <div class="time__item">
                                <div class="time__number">
                                    ${minutes}
                                </div>
                                <div class="time__label">
                                    минут
                                </div>
                            </div>

                            <div class="time__item">
                                <div class="time__number">
                                    ${seconds}
                                </div>
                                <div class="time__label">
                                    сукунд
                                </div>
                            </div>
                        </div>
                    
`;

    // Если обратный отсчет завершен, отобразить сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = `<div class="time__finish">Свадьба состоялась ${dataMarry}</div>`;
    }
}, 1000);


const playButton = document.querySelector(".audio__button");
const palyerBody = document.querySelector(".audio");
const player = document.getElementById("player");

playButton.addEventListener("click", function (e) {
    palyerBody.classList.toggle('start-play');
    playerToggle();
});

let playerToggle = () => {
    if (palyerBody.closest('.start-play')) {
        playerSart();
    } else {
        playerStop();
    }
}

let playerStop = () => {
    player.pause();
}

let playerSart = () => {
    player.play();
}

// слушаем клик на всем документе
// document.addEventListener("click", function (e) {
//     // target - элемент на который кликнули (получаем этот элемент)
//     const targetElemet = e.target;
//     const buttonPlay = document.querySelector('.play-button');
//     console.log(targetElemet);
//     console.log(buttonPlay);
//     if (buttonPlay.contains('.play-button') || !playerBody.contains('.start-play')) {
//         player.play();
//         console.log('START');

//     }
//     else {
//         player.pause();
//         console.log('STOP');
//     }

//     // if (targetElemet.closest('.play-button')) {
//     //     console.log('HAZATE PLAY');
//     //     player.play();
//     //     buttonPlay.classList.add('palay-start');
//     // }
//     // else if (buttonPlay.contains('.palay-start')) {
//     //     console.log('YZJE VKLIYCHENO');
//     // }
//     // else {
//     //     player.pause();
//     // }
// });


let photoButton = document.querySelector('.photo__button');
if (photoButton) {
    if (!photoButton.hasAttribute('download')) {
        photoButton.classList.add('disabled');
        photoButton.addEventListener("click", function (e) {
            e.preventDefault();
        });
    }
}

const nodemailer = require("nodemailer");
nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "passTestSvadbasite",
        pass: "gufpjhhnhdgvxxlj",
    },
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
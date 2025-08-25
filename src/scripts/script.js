//добавление wow-эффекта
new WOW({
    animateClass: "animate__animated"
}).init();

// переменные для блока с описаниями мероприятий тура
let eventDesciptions = $('.tour-event .event-description');
let eventReadMoreBtn = $('.tour-event .read-more-btn');
let bigEventDescriptions = ["Кружащиеся Дервиши, танцевальная постановка в стиле настоящей турецкой свадьбы, кавказские танцы с огнем и ножами, барабанное шоу и зажигательный танец",
    "Одним из поистине незабываемых впечатлений от поездки в Турцию является посещение Хамама. Турецкая баня помогает человеку расслабиться и достичь умиротворения",
    "Остановка на смотровой площадке, откуда открывается захватывающий вид на музей Гёреме, самого известного монастырского комплекса Каппадокии, включенного в список всемирного наследия ЮНЕСКО",
    "Путешествие на воздушном шаре — лучший способ с высоты птичьего полета насладиться великолепными видами Каппадокии, озаренной первыми лучами солнца",
    "Как и в других долинах Каппадокии вы здесь увидите множество пещер, уникальных христианских церквей, сохранившиеся до наших дней, ухоженные виноградники и плодовые деревья",
    "Отличная возможность покататься верхом по долинам вдали от цивилизации, насладиться сказочными пейзажами и познакомиться с традиционной жизнью и культурой Каппадокии"];
let smallEventDescriptions = [];
let eventImages = $('.event-image');
let images = $('.event-image img');

// переменные для блока с отзывами клиентов
let reviewTexts = $('.tour-review .review-text');
let reviewReadMoreBtn = $('.tour-review .read-more-btn');
let bigReviewTexts = ["Очень красивый и уютный городок. Просто гулять по городу уже масса впечатлений — дома в горах, пещеры, множество заведений, украшены по-своему и все в общем стиле. Тур оператора выбрала по совету знакомых и осталась очень довольна. Очень насыщенная и интересная программа. Обязательно буду советовать вашу компанию своим знакомым. Спасибо за незабываемые впечатления!",
    "Спасибо за четко организованный тур и насыщенную программу! Ни разу не пожалел, что выбрал вашу компанию. Полеты на воздушном шаре действительно оказались незабываемыми. Так же спасибо за услугу профессионального фотографа, теперь эти моменты счастья останутся со мной на всю жизнь!",
    "Я очень давно мечтала покататься на воздушном шаре в Каппадокии, изначально я планировала отметить там годовщину свадьбы, но в планы вмешался коронавирус, поэтому когда мы оказались в Сиде, и я узнала, что ехать оттуда до Каппадокии гораздо ближе чем с остальных курортов, было принято решение ни в коем случае не упускать такого шанса!",
    "О Каппадокии я раньше даже и не слышал. Турция как-то всегда ассоциировалась только с пляжным отдыхом, а тут в самом центре Турции есть такой уникальный район. Что сразу понравилось - так это инфраструктура. Ровные гладкие дороги. Аккуратные и чистые города и посёлки. Современные гостиницы. Турки приложили немало усилий, чтобы этот район был комфортным для туристов.",
    "Каппадокия стала убежищем для первых христиан, которые смогли тут укрыться от гонений нетерпимой и всекарающей Римской империи. Спасаясь от истребления, первые христианские общины втайне выдалбливали в этих мягких скальных породах жилые дома и склады, храмы и целые города. Эта удивительная земля, овеянная тысячами легенд, может считаться одним из самых интересных, непостижимых мест."];

function LoadSmallElements() {
    // задание размеров, свойств и текстов для блока с описаниями мероприятий тура на маленьком экране (менее 520px)
    for (let i = 0; i < eventDesciptions.length; i++) {
        $(eventDesciptions[i]).text(`${eventDesciptions[i].innerText.slice(0, 68)}...`);
        smallEventDescriptions.push($(eventDesciptions[i]).text());
        $(eventImages[i]).attr('href', `src/images/events/event-small-${i + 1}.png`);
        $(images[i]).attr('src', `src/images/events/event-small-${i + 1}.png`);
    }
    $('.tour-event').css('height', '158px');
    $('.event-about').css('height', '155px');
    $('.event-title h3 span#changing-title')[0].innerHTML = "Турецкая баня";

    // задание размеров, свойств и текстов для блока с отзывами клиентов на маленьком экране (менее 520px)
    for (let i = 0; i < reviewTexts.length; i++) {
        $(reviewTexts[i]).text(`${reviewTexts[i].innerText.slice(0, 162)}...`);
    }
    $('.tour-review').css('height', '266px');

    // задание картинок футера на маленьком экране
    $('.logo-block img').attr('src', `src/images/logo-small-adaptive.png`);
    $('#vk-social img').attr('src', `src/images/socials/vk-small-adaptive.png`);
    $('#instagram-social img').attr('src', `src/images/socials/instagram-small-adaptive.png`);
    $('#facebook-social img').attr('src', `src/images/socials/facebook-small-adaptive.png`);
}

function LoadBigElements() {
    // задание размеров, свойств и текстов для блока с описаниями мероприятий тура на большом экране
    $('.tour-event').css('height', '296px');
    eventReadMoreBtn.removeClass('active-description').find('span').text('Читать далее')
        .parent().find('svg').css('display', 'inline');
    for (let i = 0; i < eventDesciptions.length; i++) {
        $(eventDesciptions[i]).text(bigEventDescriptions[i]);
        $(eventImages[i]).attr('href', `src/images/events/event-${i + 1}.png`);
        $(images[i]).attr('src', `src/images/events/event-${i + 1}.png`);
        $(eventReadMoreBtn[i]).fadeOut();
        $('.event-about').css('height', '293px');
    }
    $('.event-title h3 span#changing-title')[0].innerHTML = "Турецкая баня (Хамам)";

    // задание размеров, свойств и текстов для блока с отзывами клиентов на большом экране
    reviewReadMoreBtn.removeClass('active-description').find('span').text('Читать далее')
        .parent().find('svg').css('display', 'inline');
    $('.tour-review').css('height', '361px');
    for (let i = 0; i < reviewTexts.length; i++) {
        $(reviewTexts[i]).text(bigReviewTexts[i]);
    }

    // задание картинок футера на большом экране
    $('.logo-block img').attr('src', `src/images/logo.png`);
    $('#vk-social img').attr('src', `src/images/socials/vk.png`);
    $('#instagram-social img').attr('src', `src/images/socials/instagram.png`);
    $('#facebook-social img').attr('src', `src/images/socials/facebook.png`);
}

//создание событий для кнопок "Читать далее"/"Назад" (текст становится большим в описании мероприятий и наоборот - сворачивается)
for (let i = 0; i < eventReadMoreBtn.length; i++) {
    $(eventReadMoreBtn[i]).on("click", function () {
        if (!$(this).hasClass('active-description')) {
            $(eventDesciptions[i]).text(bigEventDescriptions[i]);
            $(this).find('span').text('Назад').parent().find('svg').css('display', 'none');
            $(this).parent().parent().css('height', '235px');
            $(this).parent().next().find('img').css('height', '100%');
            $(this).addClass('active-description');
        } else {
            $(eventDesciptions[i]).text(smallEventDescriptions[i]);
            $(this).find('span').text('Читать далее').parent().find('svg').css('display', 'inline');
            $(this).parent().parent().css('height', '154.8px');
            $(this).removeClass('active-description');
        }
    });
}

//создание событий для кнопок "Читать далее"/"Назад" (текст становится большим в блоке отзыва и наоборот - сворачивается)
for (let i = 0; i < reviewReadMoreBtn.length; i++) {
    $(reviewReadMoreBtn[i]).on("click", function () {
        if (!$(this).hasClass('active-description')) {
            $(reviewTexts[i]).text(bigReviewTexts[i]);
            $(this).find('span').text('Назад').parent().find('svg').css('display', 'none');
            $(this).parent().css('height', '400px');
            $(this).addClass('active-description');
        } else {
            $(reviewTexts[i]).text(smallReviewTexts[i]);
            $(this).find('span').text('Читать далее').parent().find('svg').css('display', 'inline');
            $(this).parent().css('height', '266px');
            $(this).removeClass('active-description');
        }
    });
}

// задание размеров, свойств и текстов при изначальной загрузке сайта
if (window.innerWidth < 520) {
    LoadSmallElements();
} else {
    LoadBigElements();
}

// задание размеров, свойств и текстов в случае изменения размеров экрана при уже загруженном сайте
window.addEventListener("resize", function (e) {
    if (e.target.innerWidth <= 520) {
        LoadSmallElements();
    } else {
        LoadBigElements();
    }
    $('.tour-cards').css('transform', `translateX(0)`);
    $('.tour-review-items').css('transform', `translateX(0)`);
    $('.tour-photo-collages').css('transform', `translateX(0)`);
    $('.checkpoint').each(function () {
        $(this).removeClass('active');
    });
    $(sliderEvents.sliderDots[0]).addClass('active');
    $(sliderPhotos.sliderDots[0]).addClass('active');
    $(sliderReviews.sliderDots[0]).addClass('active');
})

//реализация функции увеличения картинки по нажатию на нее
$(document).ready(function () {
    $('.photo').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
});

//слайдер с расписаниями туров
const sliderEvents = {
    sliderLine: $('.tour-cards'),
    slideItems: $('.tour-card'),
    sliderDots: $('.tour-schedule .checkpoint'),
    sliderBtnPrev: $('#prev-slider-tour-cards'),
    sliderBtnNext: $('#next-slider-tour-cards')
};

function createSliderTourSchedule(sliderParameters) {
    let sliderLine = sliderParameters.sliderLine;
    let slideItems = sliderParameters.slideItems;
    let sliderDots = sliderParameters.sliderDots;
    let sliderBtnPrev = sliderParameters.sliderBtnPrev;
    let sliderBtnNext = sliderParameters.sliderBtnNext;
    let sliderCount = 0;
    let sliderWidth;

    sliderBtnPrev.on('click', prevSlide);
    sliderBtnNext.on('click', nextSlide);

    window.addEventListener('resize', showSlideTours);

    function showSlideTours() {
        sliderWidth = sliderParameters.slideItems[0].offsetWidth;
        sliderLine.css('width', `${sliderWidth * slideItems.length}px`);
    }

    showSlideTours();

    function nextSlide() {
        sliderCount++;
        let isSmallDisplay = window.innerWidth <= 520;
        let isMediumDisplay = window.innerWidth <= 780 && window.innerWidth > 520;
        let isBigDisplay = window.innerWidth > 780;
        if (isSmallDisplay && sliderCount >= sliderDots.length) {
            sliderCount = 0;
        } else if
        (isMediumDisplay && sliderCount >= sliderDots.length - 1) {
            sliderCount = 0;
        } else if
        (isBigDisplay && sliderCount >= sliderDots.length - 2) {
            sliderCount = 0;
        }
        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        let isSmallDisplay = window.innerWidth <= 520;
        let isMediumDisplay = window.innerWidth <= 780 && window.innerWidth > 520;
        let isBigDisplay = window.innerWidth > 780;
        if (isSmallDisplay && sliderCount < 0) sliderCount = sliderDots.length - 1;
        else if (isMediumDisplay && sliderCount < 0) sliderCount = sliderDots.length - 2;
        else if (isBigDisplay && sliderCount < 0) sliderCount = sliderDots.length - 3;
        rollSlider();
        thisSlide(sliderCount);
    }

    function rollSlider() {
        sliderLine.css('transform', `translateX(${(slideItems.length - sliderDots.length - sliderCount) * (sliderWidth + 30)}px)`);
    }

    function thisSlide(index) {
        sliderDots.each(function () {
            $(this).removeClass('active');
        });
        $(sliderDots[index]).addClass('active');
    }

    sliderDots.on("click", function () {
        let button = $(this);
        if (!button.hasClass('active')) {
            for (let i = 0; i < sliderDots.length; i++) {
                if (button.is(sliderDots[i])) {
                    sliderCount = i;
                } else {
                    $(sliderDots[i]).removeClass('active');
                }
            }
        }
        button.addClass('active');
        rollSlider();
    });
}

createSliderTourSchedule(sliderEvents);

//слайдер с коллажами фотографий с Каппадокии
const sliderPhotos = {
    sliderLine: $('.tour-photo-collages'),
    slideItems: $('.tour-photo-collage'),
    sliderDots: $('.slider-tour-photos .checkpoint'),
    sliderBtnPrev: $('#prev-slider-tour-photos'),
    sliderBtnNext: $('#next-slider-tour-photos')
};

function createSliderCollages(sliderParameters) {
    let sliderLine = sliderParameters.sliderLine;
    let slideItems = sliderParameters.slideItems;
    let sliderDots = sliderParameters.sliderDots;
    let sliderBtnPrev = sliderParameters.sliderBtnPrev;
    let sliderBtnNext = sliderParameters.sliderBtnNext;
    let sliderCount = 0;
    let sliderWidth;

    window.addEventListener('resize', showSlideCollages);

    sliderBtnPrev.on('click', prevSlide);
    sliderBtnNext.on('click', nextSlide);

    function showSlideCollages() {
        sliderWidth = slideItems[0].offsetWidth;
        sliderLine.css('width', `${sliderWidth * slideItems.length}px`);
    }

    showSlideCollages();

    let isSmallSlider = false;
    function nextSlide() {
        sliderCount++;
        if (window.innerWidth > 865 && sliderCount > sliderDots.length - 1) {
            sliderCount = 0;
            slideItems = $('.tour-photo-collage');
            isSmallSlider = false;
        } else if (window.innerWidth < 865 && sliderCount <= 19) {
            slideItems = $('.tour-photo-collages .photo');
            isSmallSlider = true;
        } else if (sliderCount >= 20) {
            sliderCount = 0;
        }
        showSlideCollages();
        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0 && window.innerWidth > 865) {
            sliderCount = slideItems.length - 1;
            isSmallSlider = false;
        } else if (sliderCount < 0 && window.innerWidth < 865) {
            slideItems = $('.tour-photo-collages .photo');
            sliderCount = slideItems.length - 6;
            showSlideCollages();
            isSmallSlider = true;
        }
        rollSlider();
        thisSlide(sliderCount);
    }

    function rollSlider() {
        if(isSmallSlider) {
            sliderLine.css('transform', `translateX(${(slideItems.length - sliderCount - 25) * (sliderWidth + 20)}px)`);
        } else {
            sliderLine.css('transform', `translateX(${(slideItems.length - sliderDots.length - sliderCount) * (sliderWidth)}px)`);
        }
    }

    function thisSlide(index) {
        sliderDots.each(function () {
            $(this).removeClass('active');
        });
        $(sliderDots[index]).addClass('active');
    }

    sliderDots.on("click", function () {
        sliderDots.each(function () {
            $(this).removeClass('active');
        });
        if ($(this).is('button#checkpoint-photo-collage-1') && !$(this).hasClass('active'))
            sliderCount = 0;
        if ($(this).is('button#checkpoint-photo-collage-2') && !$(this).hasClass('active'))
            sliderCount = 1;
        if ($(this).is('button#checkpoint-photo-collage-3') && !$(this).hasClass('active'))
            sliderCount = 2;
        if ($(this).is('button#checkpoint-photo-collage-4') && !$(this).hasClass('active'))
            sliderCount = 3;
        if ($(this).is('button#checkpoint-photo-collage-5') && !$(this).hasClass('active'))
            sliderCount = 4;
        $(this).addClass('active');
        rollSlider();
    });
}

createSliderCollages(sliderPhotos);

//слайдер с отзывами клиентов
const sliderReviews = {
    sliderLine: $('.tour-review-items'),
    slideItems: $('.tour-review'),
    sliderDots: $('.slider-tour-reviews .checkpoint'),
    sliderBtnPrev: $('#prev-slider-tour-reviews'),
    sliderBtnNext: $('#next-slider-tour-reviews')
};

function createSliderReviews(sliderParameters) {
    let sliderLine = sliderParameters.sliderLine;
    let slideItems = sliderParameters.slideItems;
    let sliderDots = sliderParameters.sliderDots;
    let sliderBtnPrev = sliderParameters.sliderBtnPrev;
    let sliderBtnNext = sliderParameters.sliderBtnNext;
    let sliderCount = 0;
    let sliderWidth;

    window.addEventListener('resize', showSlideReviews);

    sliderBtnPrev.on('click', prevSlide);
    sliderBtnNext.on('click', nextSlide);

    function showSlideReviews() {
        sliderWidth = slideItems[0].offsetWidth;
        sliderLine.css('width', `${sliderWidth * slideItems.length}px`);
    }

    showSlideReviews();

    function nextSlide() {
        sliderCount++;
        let isSmallDisplay = window.innerWidth <= 520;
        let isMediumDisplay = window.innerWidth <= 900 && window.innerWidth > 520;
        let isBigDisplay = window.innerWidth > 900;
        if (isSmallDisplay && sliderCount >= slideItems.length) sliderCount = 0;
        else if (isMediumDisplay && sliderCount > slideItems.length - 1) sliderCount = 0;
        else if (sliderCount > slideItems.length - 2 && isBigDisplay) sliderCount = 0;
        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        let isSmallDisplay = window.innerWidth <= 520;
        let isMediumDisplay = window.innerWidth <= 900 && window.innerWidth > 520;
        let isBigDisplay = window.innerWidth > 900;
        if (isSmallDisplay && sliderCount < 0) {
            sliderCount = sliderDots.length - 1;
            console.log(sliderCount);
            console.log(sliderDots.length);
        } else if (isMediumDisplay && sliderCount < 0) sliderCount = sliderDots.length - 1;
        else if (sliderCount < 0 && isBigDisplay) sliderCount = sliderDots.length - 2;
        rollSlider();
        thisSlide(sliderCount);
    }

    function rollSlider() {
        sliderLine.css('transform', `translateX(${(slideItems.length - sliderDots.length - sliderCount) * (sliderWidth + 30)}px)`);
    }

    function thisSlide(index) {
        sliderDots.each(function () {
            $(this).removeClass('active');
        });
        $(sliderDots[index]).addClass('active');
    }

    sliderDots.on("click", function () {
        sliderDots.each(function () {
            $(this).removeClass('active');
        });
        if ($(this).is('button#checkpoint-tour-review-1') && !$(this).hasClass('active'))
            sliderCount = 0;
        if ($(this).is('button#checkpoint-tour-review-2') && !$(this).hasClass('active'))
            sliderCount = 1;
        if ($(this).is('button#checkpoint-tour-review-3') && !$(this).hasClass('active'))
            sliderCount = 2;
        if ($(this).is('button#checkpoint-tour-review-4') && !$(this).hasClass('active'))
            sliderCount = 3;
        if ($(this).is('button#checkpoint-tour-review-5') && !$(this).hasClass('active'))
            sliderCount = 4;
        $(this).addClass('active');
        rollSlider();
    });
}

createSliderReviews(sliderReviews);

//проверка полей формы на валидность и AJAX-запрос к серверу
let phoneInput = $('.form-input#phone');
let nameInput = $('.form-input#name');
IMask(phoneInput[0], {mask: '+{375}(00)000-00-00'});
nameInput.on("keydown", function (e) {
    return /[А-Я, A-Z]/i.test(e.key) || e.key === 'Backspace' || e.key === 'Delete';
});
let loader = $('.loader');
$('.form-btn').on("click", function () {
    loader.css('display', 'flex');
    let hasError = false;
    phoneInput.css('border', '0');
    nameInput.css('border', '0');
    $('.invalid-text').hide();
    hasError = isDataIncorrect(phoneInput, nameInput);
    let form = $('.order-form');
    let orderResultText = $('.order-result-text');

    if (!hasError) {
        console.log(nameInput.val());
        $.ajax({
            method: 'POST',
            url: 'http://testologia.ru/checkout',
            data: {name: nameInput.val(), phone: phoneInput.val()}
        })
            .done(function (msg) {
                loader.hide();
                form.fadeOut();
                $('.order-text').fadeOut();
                setTimeout(function () {
                    orderResultText.fadeIn('slow');
                    orderResultText.css('visibility', 'visible');
                    orderResultText.css('display', 'flex');
                }, 1000)
                if (msg.success === 1) {
                    orderResultText.text('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!');
                } else if (msg.success === 0) {
                    orderResultText.text('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    orderResultText.css('color', 'red');
                }
            })
    }

    loader.css('display', 'none');
});

//функция, проверяющая правильность заполнения полей ввода в форме и во всплывающем окне
function isDataIncorrect(phoneInput, nameInput) {
    let hasError = false;
    if (!phoneInput.val()) {
        phoneInput.css('border', '1px solid red');
        phoneInput.next().show();
        hasError = true;
    }
    if (!nameInput.val()) {
        nameInput.css('border', '1px solid red');
        nameInput.next().show();
        hasError = true;
    }
    return hasError;
}

//проверка на валидность полей всплывающего окна и вывод пользователю в случае корректных данных соответствующего сообщения
let phoneInputModal = $('.modal-input#phone-modal');
let nameInputModal = $('.modal-input#name-modal');
IMask(phoneInputModal[0], {mask: '+{375}(00)000-00-00'});
nameInputModal.on("keydown", function (e) {
    return /[А-Я, A-Z]/i.test(e.key) || e.key === 'Backspace' || e.key === 'Delete';
});

let invalidModalText = $('.modal .invalid-text');
let isRequestForCall = false;

$('.modal-btn').on("click", function () {
    phoneInputModal.css('border', '0');
    nameInputModal.css('border', '0');
    invalidModalText.hide();
    let hasError = isDataIncorrect(phoneInputModal, nameInputModal);
    if (!hasError) {
        $('.modal-body .modal-title').fadeOut();
        $('.input-group').fadeOut();
        $('.modal-btn').fadeOut();
        isRequestForCall = true;
        setTimeout(function () {
            $('.response-answer').css('display', 'flex').fadeIn();
            $('.modal-body').css('display', 'flex').css('align-items', 'center').css('justify-content', 'center');
            $('.modal-header .modal-title').text('Заявка успешно сформирована');
        }, 500);
    }
});

$('.modal .btn-close').on("click", function () {
    if (!isRequestForCall) {
        phoneInputModal.css('border', '0');
        phoneInputModal.val('');
        nameInputModal.css('border', '0');
        nameInputModal.val('');
        invalidModalText.hide();
    }
})

//маска для электронной почты
let addressInputModal = $('.mail-input');
let subscribeInvalidText = $('.subscribing-block .invalid-text');
$('.subscribe-btn').on("click", function () {
    if (!/\w+@[A-Z]+\.[A-Z]+/i.test(addressInputModal.val()) || addressInputModal.val() === "") {
        subscribeInvalidText.css('display', 'block').fadeIn();
        addressInputModal.css('border', '1px solid red');
    } else {
        subscribeInvalidText.fadeOut();
        addressInputModal.val('');
        addressInputModal.css('border', '1px solid rgb(250, 145, 85)');
        setTimeout(function () {
            alert('Вы успешно подписались на рассылку наших новостей!');
        }, 700);
    }
});

//бургерное меню на адаптив
$('#burger').on("click", function () {
    $('#menu').addClass('open');
});

$('#menu *').on("click", () => {
    $('#menu').removeClass('open');
});


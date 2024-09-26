const slides = [
    ['<p class="text_media">Начало</p>', '<img src="./assets/images/slide1.png" />'],
    ['<p class="text_media">Погода</p>', '<video controls><source src="./assets/videos/video.mp4" type="video/mp4"></souce> <source src="./assets/videos/video.webm" type="video/webm"></souce></video>'],
    ['<p>Какой-то очень информативный текст, который будет представлять интеллектуальную ценность для пользователя)))</p>'],
];

//Запуск слайда с последующим анимированным переходом
function RunSlide(elems) {
    let slider_content = document.getElementsByClassName('slider_content')[0];

    slider_content.style.transition = `0s`
    slider_content.style.opacity = 1;
    slider_content.style.marginRight = 0;

    let payload = '';
    elems.map(elem=>payload += elem);
    slider_content.innerHTML = payload;

    setTimeout(()=>{
        slider_content.style.transition = `${time*0.8}s`
        slider_content.style.opacity = 0;
        slider_content.style.marginRight = '100%';
    }, 0);
}

const stopSlider = ()=>{
    alert("Слайдер остановлен!")
}

const RunSlideAfterSettings = ()=>{    
    setInterval(
        ()=>slides.forEach((slide, num)=>setTimeout(()=>RunSlide(slide), 900 * time * num)), 900 * time * slides.length);

}


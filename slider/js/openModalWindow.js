//Пользователь задаёт время для перехода между слайдами
time = -1;

const changeRange = ()=>{
    let speed_bar = document.getElementById('speed_bar');
    let value_speed = document.getElementById('value_speed');

    value_speed.innerText = speed_bar.value + ' секунд';
    time = speed_bar.value;
}

function closeModalWindow() {
    //Закрытие окна с последующим запуском слайдера
    let time_settings = document.getElementById('time_settings');
    time_settings.style.display = 'none';

    RunSlideAfterSettings();
}

function openModalWindow() {
    //Форма модального окна для задания времени
    let time_settings = document.getElementById('time_settings');
    time_settings.style.display = 'flex';
    time_settings.innerHTML = '<div><h1 style="font-size: 12px">Установите время перехода: </h1>'+ 
                                        `<input id="speed_bar" type="range" min=0 max=10 value=0 step=0.5 onChange='changeRange()'/>`+
                                        '<p id="value_speed">0 секунд</p>' +
                                        '<button onClick=closeModalWindow()>Начать</button>'
                                +'</div'
    
}
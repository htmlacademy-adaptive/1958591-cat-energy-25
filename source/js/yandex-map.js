ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.93888, 30.32313],
    zoom: 14,
    controls: []
  },
    { suppressMapOpenBlock: true },

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'HTML ACADEMY',
      balloonContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-pin-big.png',
      // Размеры метки.
      iconImageSize: [113, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, 0]
    })

  myMap.geoObjects
    .add(myPlacemark)
});


//С помощью спрайтов
/* ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.95, 32.44],
            zoom: 2
        }),

        myPlacemark1 = new ymaps.Placemark([55.85, 60.64], {
            balloonContent: 'Маленькая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [26, 47]],
            iconImageHref: 'images/sprite.png',
            iconImageSize: [15, 27],
            iconImageOffset: [-15, -27],
        }),

        myPlacemark2 = new ymaps.Placemark([55.85, 32.64], {
            balloonContent: 'Средняя иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[34,0], [62, 46]],
            iconImageHref: 'images/sprite.png',
            iconImageSize: [26, 46],
            iconImageOffset: [-26, -46]
        }),

        myPlacemark3 = new ymaps.Placemark([55.85, 1.0], {
            balloonContent: 'Большая иконка'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[69,0], [97, 46]],
            iconImageHref: 'images/sprite.png',
            iconImageSize: [35, 63],
            iconImageOffset: [-35, -63]
        });

    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);
} */



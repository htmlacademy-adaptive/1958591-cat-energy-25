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

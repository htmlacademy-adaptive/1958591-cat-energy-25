let ContactsMap = document.querySelector('.contacts__map');

if (ContactsMap.classList.contains('contacts__map--nojs')) {
  ContactsMap.classList.remove('contacts__map--nojs');
}

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

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'HTML ACADEMY',
      balloonContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/pin.png',
      iconImageSize: [113, 106],
      iconImageOffset: [0, 0]
    })

  myMap.geoObjects
    .add(myPlacemark)
});

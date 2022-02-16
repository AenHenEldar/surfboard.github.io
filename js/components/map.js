ymaps.ready(init);

function init() {
    const map = new ymaps.Map('map', {
        center: [55.75, 37.6],
        zoom: 14,
        controls: [],
    });

    map.behaviors.disable('scrollZoom');
    map.geoObjects
        .add(new ymaps.Placemark([55.75, 37.6], {
            hintContent: 'Мы здесь'
        }, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [58, 73],
        }))
}
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.873739, 74.587736],
        zoom: 18
    });
    myIcon = DG.icon({
        iconUrl: './img/all-content/pin.png',
        iconSize: [53, 60]
    });
    DG.marker([42.873635, 74.587591], {
        icon: myIcon
    }).addTo(map);
});

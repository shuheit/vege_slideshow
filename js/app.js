var app = app || {};

$(function() {
  var veges = [
    { image: 'img/eggplant.png', name: 'eggplant' },
    { image: 'img/potato.png', name: 'potato' },
    { image: 'img/tomato.png', name: 'tomato' },
    { image: 'img/yellowpepper.png', name: 'yellowpepper' }
  ];

  new app.VegesView(veges);
});
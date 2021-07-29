//OSM
var t_A = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "<a href='http://osm.org/copyright' target='?blank'>OpenStreetMap</a>",
});

//GSI Pale
///var t_B = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    ///attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
///});

//GSI Ort
var t_C = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//治水地形分類図
var t_D = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/lcmfc2/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//明治期の低湿地
var t_E = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/swale/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//洪水浸水想定区域(国管理河川)
var t_F = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//洪水浸水想定区域(都道府県管理河川-栃木県)
var t_G = new L.tileLayer('https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_pref_data/09/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
var map = L.map('map', {
    center: [36.38254, 139.734104],
    zoom: 10,
    zoomControl: true,
    layers: [t_A],
    maxZoom:16,
});

//BaseLayer
var Map_BaseLayer = {
    "Open STreet Map": t_A,
    ///"地理院地図":t_B,
    "国土地理院航空写真":t_C
};

//AddLayer
var Map_AddLayer = {
    "治水地形分類図": t_D,
    "明治期の低湿地": t_E,
    "洪水浸水想定区域(国)": t_F,
    "洪水浸水想定区域(県)": t_G,
};

//LayerControl
L.control.layers(
    Map_BaseLayer, 
    Map_AddLayer, 
    {
    collapsed: false
    }
).addTo(map);

//OpacityControl
L.control.opacity(
    Map_AddLayer
).addTo(map);
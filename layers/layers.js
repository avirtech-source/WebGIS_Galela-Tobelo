var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_AOI_GalelaTobelo_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:AOI_Galela-Tobelo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AOI_Galela-Tobelo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AOI_GalelaTobelo_1, 1]);
var lyr_QC_GALELA_FULL_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:QC_GALELA_FULL",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "QC_GALELA_FULL",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_QC_GALELA_FULL_2, 1]);
var lyr_QC_TOBELO_FULL_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:QC_TOBELO_FULL",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "QC_TOBELO_FULL",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_QC_TOBELO_FULL_3, 1]);
var lyr_Jalan_Kat1_GalelaTobelo_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:Jalan_Kat1_Galela-Tobelo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jalan_Kat1_Galela-Tobelo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Jalan_Kat1_GalelaTobelo_4, 0]);
var lyr_Jalan_Kat2_GalelaTobelo_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:Jalan_Kat2_Galela-Tobelo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jalan_Kat2_Galela-Tobelo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Jalan_Kat2_GalelaTobelo_5, 0]);
var lyr_Pemukiman_GalelaTobelo_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Galela_Tobelo:Pemukiman_Galela-Tobelo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Pemukiman_Galela-Tobelo",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Pemukiman_GalelaTobelo_6, 0]);

lyr_GoogleSatellite_0.setVisible(true);lyr_AOI_GalelaTobelo_1.setVisible(true);lyr_QC_GALELA_FULL_2.setVisible(true);lyr_QC_TOBELO_FULL_3.setVisible(true);lyr_Jalan_Kat1_GalelaTobelo_4.setVisible(true);lyr_Jalan_Kat2_GalelaTobelo_5.setVisible(true);lyr_Pemukiman_GalelaTobelo_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AOI_GalelaTobelo_1,lyr_QC_GALELA_FULL_2,lyr_QC_TOBELO_FULL_3,lyr_Jalan_Kat1_GalelaTobelo_4,lyr_Jalan_Kat2_GalelaTobelo_5,lyr_Pemukiman_GalelaTobelo_6];

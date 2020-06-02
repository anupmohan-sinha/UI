import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.scss']
})
export class MapHomeComponent implements AfterViewInit {
  constructor() { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  heatmap: any;
  lat: 37.775;
  lng: -122.434;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    zoom: 3,
    styles: [{
      elementType: 'geometry',
      stylers: [
        {
          color: '#1d2c4d'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8ec3b9'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1a3646'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878'
        }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#64779e'
        }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878'
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#334e87'
        }
      ]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#023e58'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#283d6a'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6f9ba5'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#023e58'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3C7680'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#304a7d'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2c6675'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#255763'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#b0d5ce'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#023e58'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d'
        }
      ]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#283d6a'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3a4762'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#0e1626'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#4e6d70'
        }
      ]
    }],
    center: {lat: 43, lng: 12}
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.getPoints(),
      map: this.map
    });
    this.heatmap.set('radius', 35);
    this.marker.setMap(this.map);
   }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  getPoints() {
    return [
      new google.maps.LatLng(37.0902, -95.7129),
      new google.maps.LatLng(43, 12),
      new google.maps.LatLng(40, -4),
      new google.maps.LatLng(51, 9),
      new google.maps.LatLng(30.9756, 112.2707),
      new google.maps.LatLng(46.2276, 2.2137),
      new google.maps.LatLng(32, 53),
      new google.maps.LatLng(55.3781, -3.436),
      new google.maps.LatLng(38.9637, 35.2433),
      new google.maps.LatLng(46.8182, 8.2275),
      new google.maps.LatLng(50.8333, 4),
      new google.maps.LatLng(52.1326, 5.2913),
      new google.maps.LatLng(47.5162, 14.5501),
      new google.maps.LatLng(36, 128),
      new google.maps.LatLng(39.3999, -8.2245),
      new google.maps.LatLng(-14.235, -51.9253),
      new google.maps.LatLng(31, 35),
      new google.maps.LatLng(63, 16),
      new google.maps.LatLng(52.9399, -73.5491),
      new google.maps.LatLng(60.472, 8.4689),
      new google.maps.LatLng(53.1424, -7.6921),
      new google.maps.LatLng(60, 90),
      new google.maps.LatLng(49.8175, 15.473),
      new google.maps.LatLng(56.2639, 9.5018),
      new google.maps.LatLng(-35.6751, -71.543),
      new google.maps.LatLng(51.9194, 19.1451),
      new google.maps.LatLng(-1.8312, -78.1834),
      new google.maps.LatLng(2.5, 112.5),
      new google.maps.LatLng(51.2538, -85.3232),
      new google.maps.LatLng(45.9432, 24.9668),
      new google.maps.LatLng(13, 122),
      new google.maps.LatLng(30.3753, 69.3451),
      new google.maps.LatLng(36, 138),
      new google.maps.LatLng(49.8153, 6.1296),
      new google.maps.LatLng(21, 78),
      new google.maps.LatLng(-33.8688, 151.2093),
      new google.maps.LatLng(24, 45),
      new google.maps.LatLng(-0.7893, 113.9213),
      new google.maps.LatLng(15, 101),
      new google.maps.LatLng(64, 26),
      new google.maps.LatLng(39.0742, 21.8243),
      new google.maps.LatLng(-9.19, -75.0152),
      new google.maps.LatLng(23.3417, 113.4244),
      new google.maps.LatLng(23.6345, -102.5528),
      new google.maps.LatLng(-30.5595, 22.9375),
      new google.maps.LatLng(18.7357, -70.1627),
      new google.maps.LatLng(44.0165, 21.0059),
      new google.maps.LatLng(8.538, -80.7821),
      new google.maps.LatLng(64.9631, -19.0208),
      new google.maps.LatLng(33.882, 113.614),
      new google.maps.LatLng(4.5709, -74.2973),
      new google.maps.LatLng(-38.4161, -63.6167),
      new google.maps.LatLng(24, 54),
      new google.maps.LatLng(29.1832, 120.0934),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(28.0339, 1.6596),
      new google.maps.LatLng(1.2833, 103.8333),
      new google.maps.LatLng(-37.8136, 144.9631),
      new google.maps.LatLng(45.1, 15.2),
      new google.maps.LatLng(25.3548, 51.1839),
      new google.maps.LatLng(48.3794, 31.1656),
      new google.maps.LatLng(27.6104, 111.7088),
      new google.maps.LatLng(31.8257, 117.2264),
      new google.maps.LatLng(26, 30),
      new google.maps.LatLng(53.9333, -116.5765),
      new google.maps.LatLng(58.5953, 25.0136),
      new google.maps.LatLng(27.614, 115.7221),
      new google.maps.LatLng(46.1512, 14.9955),
      new google.maps.LatLng(-28.0167, 153.4),
      new google.maps.LatLng(-40.9006, 174.886),
      new google.maps.LatLng(22.3, 114.2),
      new google.maps.LatLng(33, 44),
      new google.maps.LatLng(31.7917, -7.0926),
      new google.maps.LatLng(36.3427, 118.1498),
      new google.maps.LatLng(40.0691, 45.0382),
      new google.maps.LatLng(0, 0),
      new google.maps.LatLng(55.1694, 23.8813),
      new google.maps.LatLng(26.0275, 50.55),
      new google.maps.LatLng(32.9711, 119.455),
      new google.maps.LatLng(47.1625, 19.5033),
      new google.maps.LatLng(47.4116, 28.3699),
      new google.maps.LatLng(40.1824, 116.4142),
      new google.maps.LatLng(43.9159, 17.6791),
      new google.maps.LatLng(30.0572, 107.874),
      new google.maps.LatLng(30.6171, 102.7103),
      new google.maps.LatLng(31.202, 121.4491),
      new google.maps.LatLng(3.848, 11.5021),
      new google.maps.LatLng(33.8547, 35.8623),
      new google.maps.LatLng(34, 9),
      new google.maps.LatLng(56.8796, 24.6032),
      new google.maps.LatLng(47.862, 127.7615),
      new google.maps.LatLng(42.7339, 25.4858),
      new google.maps.LatLng(48.0196, 66.9237),
      new google.maps.LatLng(48.669, 19.699),
      new google.maps.LatLng(40.1431, 47.5769),
      new google.maps.LatLng(42.5063, 1.5218),
      new google.maps.LatLng(41.6086, 21.7453),
      new google.maps.LatLng(29.5, 47.75),
      new google.maps.LatLng(9.7489, -83.7534),
      new google.maps.LatLng(-31.9505, 115.8605),
      new google.maps.LatLng(-34.9285, 138.6007)

    ];
  }

}

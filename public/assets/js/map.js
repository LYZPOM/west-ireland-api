function initMap() {
        var myLatlng = {lat: 53.72387639999999, lng: -9.00173559999996};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var locations = [
          ['Beach louisburg, Old Head, Ireland', 53.7758737, -9.769869900000003],
          ['Carrownisky, Co. Mayo, Ireland', 54.286937, -9.368621]
        ];

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }

      }

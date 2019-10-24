function initMap() {
  let coordinates = {lat: 55.744261, lng: 37.634885},

      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 8,
          scrollwheel: false
      });
      console.log(map);
}

var areas = document.getElementsByTagName('area');
    var description = document.getElementById('description');

    for (var i = 0; i < areas.length; i++) {
      areas[i].addEventListener('mouseover', function(e) {
        var location = e.target.getAttribute('data-location');
        var descriptionText = e.target.getAttribute('data-description');
        var imageSrc = e.target.getAttribute('data-image');

        description.innerHTML = '<img src="' + imageSrc + '" alt="' + location + ' Image" />';
        description.innerHTML += '<h2>' + location + '</h2>';
        description.innerHTML += '<p>' + descriptionText + '</p>';
      });

      areas[i].addEventListener('mouseout', function() {
        description.innerHTML = '';
      });
    }
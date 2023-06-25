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

var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', function() {
    var searchTerm = searchInput.value.toLowerCase();
    var foundArea = null;

    for (var i = 0; i < areas.length; i++) {
      var location = areas[i].getAttribute('data-location').toLowerCase();

      if (location === searchTerm) {
        foundArea = areas[i];
        break;
      }
    }

    if (foundArea) {
      description.innerHTML = '<img src="' + foundArea.getAttribute('data-image') + '" alt="' + foundArea.getAttribute('data-location') + ' Image" />';
      description.innerHTML += '<h2>' + foundArea.getAttribute('data-location') + '</h2>';
      description.innerHTML += '<p>' + foundArea.getAttribute('data-description') + '</p>';

    } else {
      description.innerHTML = 'Area not found.';
    }
  });

      areas[i].addEventListener('mouseout', function() {
        description.innerHTML = '';
      });
    }
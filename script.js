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
      var searchTerms = areas[i].getAttribute('search-terms').toLowerCase().split(',');

      if (location === searchTerm || searchTerms.includes(searchTerm)) {
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


/* ----- TAB LINKS ----- */

var tabContainers = document.getElementsByClassName("tab-container");

Array.from(tabContainers).forEach(function(tabContainer) {
  var tablinks = tabContainer.getElementsByClassName("tab-links");
  var tabcontents = tabContainer.getElementsByClassName("tab-contents");

  Array.from(tablinks).forEach(function(tablink) {
    tablink.addEventListener("click", function(event) {
      openTabDynamic(event, this.getAttribute("data-tab"), tabContainer);
    });
  });
});

function openTabDynamic(event, tabName, tabContainer) {
  var tablinks = tabContainer.getElementsByClassName("tab-links");
  var tabcontents = tabContainer.getElementsByClassName("tab-contents");

  Array.from(tablinks).forEach(function(tablink) {
    tablink.classList.remove("active-link");
  });

  Array.from(tabcontents).forEach(function(tabcontent) {
    tabcontent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link");
  tabContainer.querySelector("#" + tabName).classList.add("active-tab");
}

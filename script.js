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

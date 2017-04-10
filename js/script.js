document.getElementsByName("works")[0].addEventListener("click", function() {
  hideOther("works");
  document.getElementById("works").classList.toggle("show");
});
function hideOther (id) {
    var categories = document.getElementsByClassName("category-content");
    var i;
    for (i = 0; i < categories.length; i++) {
      var openCategory = categories[i];
      if (openCategory.id != id) {
        if (openCategory.classList.contains('show')) {
          openCategory.classList.remove('show');
        }
      }
    }
}
window.onclick = function(event) {
  if (!event.target.matches(".category")) {
    var categories = document.getElementsByClassName("category-content");
    var i;
    for (i = 0; i < categories.length; i++) {
      var openCategory = categories[i];
      if (openCategory.classList.contains('show')) {
        openCategory.classList.remove('show');
      }
    }
  }
}

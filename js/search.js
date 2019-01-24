$(function() {
  var itemsStorage = new ItemsStorage(window.localStorage);
  itemsStorage.storageItems(MOVIESDATA);
  var moviesArr = itemsStorage.getStorageItems();
  var typeArr = TYPE;
  $("#btn").click(function() {
    var movie = $("#input").val();
    localStorage.setItem("type", movie);
    searchMain(movie, typeArr, itemsStorage);
  });
  $("#input").keydown(function(e) {
    if (e.keyCode == 13) {
      var movie = $("#input").val();
      localStorage.setItem("type", movie);
      searchMain(movie, typeArr, itemsStorage);
    }
  });
});

function searchMain(movie, typeArr, itemsStorage) {
  if (movie != "") {
    var movieType = localStorage.getItem("type");
    let selectedType;
    a: for (let j in typeArr) {
      if (movie == typeArr[j]) {
        $(window).attr('location', 'search_page.html#' + movie);
        $("#" + movieType).addClass('selected').siblings('a').removeClass('selected');
        $("#" + movieType).parent('li').siblings('li').find('a').removeClass('selected');
        selectedType = itemsStorage.filterItems(movieType);
        showMovies(selectedType);
        break a;
      }
    }
    if (itemsStorage.filterNameItems(movie)[0]) {
      $(window).attr('location', 'search_page.html#' + itemsStorage.filterNameItems(movie)[0].genres.split(",")[0]);
      showMovies(itemsStorage.filterNameItems(movie));
    }
  }
}
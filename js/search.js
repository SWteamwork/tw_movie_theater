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
    if (itemsStorage.filterItems(movie)[0]) {
      $(window).attr('location', 'search_page.html#' + movie);
      $("#" + movieType).addClass('selected').siblings('a').removeClass('selected');
      $("#" + movieType).parent('li').siblings('li').find('a').removeClass('selected');
      selectedType = itemsStorage.filterItems(movieType);
      showMovies(selectedType)
    } else if (itemsStorage.filterNameItems(movie)[0]) {
      $(window).attr('location', 'search_page.html#' + itemsStorage.filterNameItems(movie)[0].genres.split(",")[0]);
      showMovies(itemsStorage.filterNameItems(movie));
    } else {
      layer.open({
        type: 1,
        area: ['500px', '250px'],
        title: '提示信息',
        shade: 0.6,
        maxmin: true,
        anim: 1,
        time: 1000,
        content: '<div style="padding:80px 20px;font-size:25px;line-height:30px">抱歉，查询失败,仅支持电影名、类别搜索</div>'
      });
    }
  }
}
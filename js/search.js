$(function() {
  var items = new ItemsStorage(window.localStorage);
  items.storageItems(MOVIESDATA);
  let moviesArr = items.getStorageItems();
  var typeArr = $(".filter_nav li a");
  $("#btn").click(function() {
    var movies = $("#input").val();
    if (movies) {
      $("#input").val("");
      for (let j in typeArr) {
        if (movies == typeArr[j].id) {
          //switch to homepape movies pages
        }
      }
      for (let i in moviesArr) {
        switch (movies) {
          case moviesArr[i].id:
          case moviesArr[i].title:
          case moviesArr[i].original_title:
            $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
            break;
          default:
            // layer.open({
            //   title: '提示信息',
            //   content: '仅支持按类别、电影名称、id查找',
            //   time: 10000,
            // });
            break;
        }
      }
    }
  });
  $("#input").keydown(function(e) {
    if (e.keyCode == 13) {
      var movies = $("#input").val();
      if (movies) {
        $("#input").val("");
        for (let j in typeArr) {
          if (movies == typeArr[j].id) {
            //switch to homepape movies pages
          }
        }
        for (let i in moviesArr) {
          switch (movies) {
            case moviesArr[i].id:
            case moviesArr[i].title:
            case moviesArr[i].original_title:
              $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
              break;
            default:
              // layer.open({
              //   title: '提示信息',
              //   content: '仅支持按类别、电影名称、id查找',
              //   time: 10000,
              // });
              break;
          }
        }
      }
    }
  });
});
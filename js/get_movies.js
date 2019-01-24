$(function() {
  let itemsStorage = new ItemsStorage(localStorage);
  itemsStorage.storageItems(MOVIESDATA);
  showMovies(itemsStorage.getStorageItems());
  listenerOfSort(itemsStorage);
});

function listenerOfSort(itemsStorage) {
  $(".filter_nav li a").on("click", function(event) {
    $(this).addClass('selected').siblings('a').removeClass('selected');
    $(this).parent('li').siblings('li').find('a').removeClass('selected');
    let filterWord = $(this).text().trim();
    if (filterWord == '全部') {
      showMovies(itemsStorage.getStorageItems());
    } else {
      let filterMovies = itemsStorage.filterItems(filterWord);
      showMovies(filterMovies);
    }
  });
}
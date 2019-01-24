class ItemsStorage {
  constructor(localStorage) {
    this.itemsStorage = localStorage;
  }
  storageItems(movies) {
    this.itemsStorage.setItem('movies', JSON.stringify(movies));
  }
  getStorageItems() {
    return JSON.parse(this.itemsStorage.getItem('movies'));
  }
  filterItems(filterWord) {
    let allmovies = this.getStorageItems();
    let filterMovies = allmovies.filter(movie => movie.genres.includes(filterWord));
    return filterMovies;
  }
  filterNameItems(filterName) {
    let all = this.getStorageItems();
    let filterNameMovies = all.filter(movie => movie.title.includes(filterName) || movie.original_title.includes(filterName));
    return filterNameMovies;
  }
}
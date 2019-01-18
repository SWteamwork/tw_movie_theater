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
}
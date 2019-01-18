function showMovies(items) {
  $('.movies_message').html('');
  $('.page p').html('');
  let itemCount = 12;
  let PageCount = Math.ceil(items.length / itemCount);
  let currentPage = 1;
  //show the first page
  $('.page p').html("第" + currentPage + "页/共" + PageCount + "页");
  isShowpageBtn(currentPage, PageCount);
  traverseItems(currentPage, itemCount, items);
  previousPageAndNextPage(currentPage, PageCount, itemCount, items);
}

function previousPageAndNextPage(currentPage, PageCount, itemCount, items) {
  $('.next_page').click(function() {
    currentPage += 1;
    isShowpageBtn(currentPage, PageCount);
    $('.movies_message').html('');
    $('.page p').html("第" + currentPage + "页/共" + PageCount + "页");
    traverseItems(currentPage, itemCount, items);
  });
  $('.previous_page').click(function() {
    currentPage -= 1;
    isShowpageBtn(currentPage, PageCount);
    $('.movies_message').html('');
    $('.page p').html("第" + currentPage + "页/共" + PageCount + "页");
    traverseItems(currentPage, itemCount, items);
  })
}

function traverseItems(currentPage, itemCount, items) {
  for (let i = (currentPage - 1) * itemCount; i < itemCount * currentPage; i++) {
    let label = `<a href='movie_details.html?=` + items[i].id + `'  class="movie_item" id=` + items[i].id + `>
              <div>
              <div class="movie_img">
              <img src=` + items[i].image + ` alt=""/>
              </div>
              <div class="movie_title">
              <p class="movie_name">` + items[i].title + `</p>
              <p class="movie_score">
              评分：` + items[i].rating + `
              </p>
             </div>
             </div>
             </a>`;
    $('.movies_message').append(label);
  }
}

function isShowpageBtn(currentPage, PageCount) {
  if (currentPage < 2) {
    $('.previous_page').hide();
  } else {
    $('.previous_page').show();
  }
  if (currentPage == PageCount) {
    $('.next_page').hide();
  } else {
    $('.next_page').show();
  }
}
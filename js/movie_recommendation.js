for (i = 1; i < 7; i++) {
  recommendation();
}

function recommendation() {
  var i = parseInt(Math.random() * 200, 10) + 1;
  let label = `<a href='movie_details.html?=` + MOVIESDATA[i].id + `'  class="movie_item" id=` + MOVIESDATA[i].id + `>
              <div>
              <div class="movie_img">
              <img src=` + MOVIESDATA[i].image + ` alt=""/>
              </div>
              <div class="movie_title">
              <p class="name">` + MOVIESDATA[i].title + `</p>
              <p class="movie_score">
              评分：` + MOVIESDATA[i].rating + `
              </p>
             </div>
             </div>
             </a>`;
  $('.move_recommendation').append(label);
}
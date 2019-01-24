var obj;

function viewComments(datas) {
  obj = eval(datas.comments);
  let label = `<li><p class='userName'>用户${obj[0].id}:</p><br />${obj[0].content}<br />评论时间${obj[0].created_at
}</li>
  <br><li><p class='userName'>用户${obj[1].id}:</p><br />${obj[1].content}<br />评论时间${obj[0].created_at
}</li>
  <br><li><p class='userName'>用户${obj[2].id}:</p><br />${obj[2].content}<br />评论时间${obj[0].created_at
}</li>
  <br><li><p class='userName'>用户${obj[3].id}:</p><br />${obj[3].content}<br />评论时间${obj[0].created_at
}</li>
 <br><li><p class='userName'>用户${obj[4].id}:</p><br />${obj[4].content}<br />评论时间${obj[0].created_at
}</li>`;
  $('.movie_content').append(label)
}

function getReview(id, callback, count = 2, start = 0) {
  $.ajax({
    type: "get",
    url: `https://api.douban.com/v2/movie/subject/${id}/comments`,
    dataType: "jsonp",
    jsonp: "callback",
    data: {
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      start: start,
      count: count,
      client: "",
      udid: ""
    },
    success: function(json) {
      callback(json);
    },
    error: function() {
      console.log(`failed to get movie comments`);
    }
  })
}
getReview(id, viewComments, 5)
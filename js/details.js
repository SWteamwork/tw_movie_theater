var data = [];
var idItem = location.href.split('=');
var id = idItem[1];
for (let i = 0; i < MOVIESDATA.length; i++) {
  if (id === MOVIESDATA[i].id) {
    data = MOVIESDATA[i];
  }
}
var template_name = $.templates("#movie_name");
var htmlOutput_name = template_name.render(data);
$(".movie_name").html(htmlOutput_name);
var template_pic = $.templates("#movie_picture");
var htmlOutput_pic = template_pic.render(data);
$(".movie_picture").html(htmlOutput_pic);
var template_info = $.templates("#movie_information");
var htmlOutput_info = template_info.render(data);
$(".movie_information").html(htmlOutput_info);
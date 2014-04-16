$('body>div').append('<ul id="articles" class="list-unstyled"><li></li></ul>');
$('#articles').ready(function(){
	moment().local();
	var formats = ['.json','.txt','.md','.html'];
	var current_date = moment().format('YYYY_MM_DD');

	$(formats).each(function(i,extension){
		$.ajax({
		  url: 'articles/'+current_date+extension,
		  context: document.body
		}).success(function(datas) {
		  $('#articles li:last-child').append('<li>'+current_date+'<br/>'+datas+'</li>');
		});
	});
});
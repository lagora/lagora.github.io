$('body').append('<ul id="articles"><li></li></ul>');
$('#articles').ready(function(){
	moment().local();
	var formats = ['.json','.txt','.md','.html'];
	var current_date = moment().format('YYYY_MM_DD');

	$(formats).each(function(i,extension){
		$.ajax({
		  url: current_date+extension,
		  context: document.body
		}).success(function(datas) {
		  console.log("success", datas);
		  $('#articles li:last-child').append('<li>'+current_date+'<br/>'+datas+'</li>');
		});
	});
});
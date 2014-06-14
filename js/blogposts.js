function load_article(y, m, d, limit, target)
{
	var date = y+'_'+m+'_'+d;
	var formats = ['.html'];
	var loaded = false;

	$(formats).each(function(i,extension){
			$.ajax({
			  url: 'articles/'+date+extension,
			  context: document.body
			}).fail(function(datas) {
			}).success(function(datas) {
			  $(target).append('<li class="blog article">'+y+'/'+m+'/'+d+'<br/>'+datas+'</li>');
			  $('body').data('loaded', $('body').data('loaded')+1);
				loaded = true;
			});
		});
	return loaded;
}
function load_archives(){
	var y = $('body').data('year');
	var m = $('body').data('month');
	var d = $('body').data('day');

	load_article(y, m, d, 3, $('#articles li:last-child'));
	d = d==1 ? 31:d-1;
	if(d==1){
		d = 31;
		if(m==1){
			m = 12;
		}else{
			m = m--;
		}
	}else{
		d = d--;
	}
	$('body').data('day', d);
	$('body').data('month', m);
	$('body').data('year', y);
}
$('body').ready(function(){
	$('body').data('loaded', 0);
	$('body .content').append('<ul id="articles" class="list-unstyled"><li data-date="'+moment().format('YYYY_MM_DD')+'"></li></ul>');
	moment().local();
	$('body').data('year', moment().format('YYYY'));
	$('body').data('month', moment().format('MM'));
	$('body').data('day', moment().format('DD'));
	$('#archives').click(function(el, el2){
		var max_attempts = 7;
		for (var i = 0; i < max_attempts; i++) {
			var loaded = load_archives();
		};
	});
	$('#archives').trigger('click');

});

function load_article (y, m, d, target)
{
	m = -1 == (''+m).indexOf('0') ? '0'+m:m;

	var date = y+'_'+m+'_'+d;
	var formats = ['.html'];
	var loaded = false;

	$(formats).each(function (i,extension) {
		$.ajax({
		  url: 'articles/'+date+extension,
		  context: document.body
		}).fail(function (datas) {
			var diff = Math.abs($('body').data('month') - $('body').data('until-month'));
			if (3 > diff) {
				load_archives();
			}
		}).success(function (datas) {
			console.log(date+', loaded');
			if (1 == d) {
				$('body').data('until-month', m-1);
			}
			$(target).append('<li date="'+date+'">'+y+'/'+m+'/'+d+'</li>');
			$(target).append('<li class="blog article" date="'+date+'">'+datas+'</li>');
			$('body').data('loaded', $('body').data('loaded')+1);
			loaded = true;
		});
	});
	return loaded;
}

function load_archives () {
	var y = $('body').data('year');
	var m = $('body').data('month');
	var d = $('body').data('day');

	load_article(y, m, d, $('#articles'));

	d = 1 == d ? 31:((d-1) < 10 ? '0'+(d-1):(d-1));
	m = 0 < m && 1 == d ? m-1:m;

	$('body').data('day', d);
	$('body').data('month', m);
	$('body').data('year', y);
}

$('body').ready(function () {
	$('body').data('loaded', 0);
	$('body .content').append('<ul id="articles" class="list-unstyled"><li class="blog" data-date="'+moment().format('YYYY_MM_DD')+'"></li></ul>');
	moment().local();
	$('body').data('year', moment().format('YYYY'));
	$('body').data('month', moment().format('MM'));
	$('body').data('day', moment().format('DD'));

	$('body').data('until-month', moment().format('MM'));
	load_archives();
	$('#archives').trigger('click');

});

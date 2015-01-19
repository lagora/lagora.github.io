var items = [
	{
		type: 'social',
		name: 'about',
		icon: 'fa fa-question',
		url: null,
		text: 'Behind the name is merely one (indie game) developer, slowly making small stranges / conceptuals / narratives games...'
	},
	{
		type: 'social',
		name: 'twitter',
		icon: 'fa fa-twitter',
		url: 'http://www.twitter.com/sonofapix',
		text: null
	},
	{
		type: 'social',
		name: 'tumblr',
		icon: 'fa fa-tumblr',
		url: 'http://www.tumblr.com/sonofapix',
		text: null
	},
	{
		type: 'social',
		name: 'google+',
		icon: 'fa fa-google-plus',
		url: 'https://plus.google.com/115074861075232179388/about',
		text: null
	},
	{
		type: 'social',
		name: 'itch.io',
		icon: 'fa fa-game',
		url: 'http://lagora.itch.io',
		text: null
	},
	{
		type: 'social',
		name: 'mail',
		icon: 'fa fa-envelope',
		url: 'mailto:lagora@sonofapix.com',
		text: null
	},
	{
		type: 'game',
		project: "d",
		title: "dulcis hypnagogia",
		tagline: "It Was Just A Murder Case.\nThe First Time I Would Have Met Him.\nIt Was My First Job As A Private Mind.",
		status: "frozen",
		demo: false
	},
	{
		type: 'game',
		project: "t", 
		title: "the bodyguard",
		status: "wip",
		demo: false
	},
	{
		type: 'game',
		project: "rp", 
		title: "robot psy",
		status: "current",
		demo: false
	}
];
$(document).ready(function () {
	console.log(items);
	var itemTemplate = '<a class="item" href="{{url}}" target="_blank"><p><i class="{{icon}} fa-3x"></i>{{name}}</p></a>';
	items.forEach(function (item, index) {
		var clonedTemplate = itemTemplate;
		
		if ('social' === item.type) {
			clonedTemplate = clonedTemplate.replace('{{name}}', '');
		} else if ('game' === item.type) {
			clonedTemplate = clonedTemplate
			.replace('{{name}}', item.project)
			.replace('{{url}}', '{{project}}');
		}
		
		Object.keys(item).forEach(function (itemKey, index2) {
			console.log(itemKey, item[itemKey]);
			if (-1 !== clonedTemplate.indexOf) {
				clonedTemplate = clonedTemplate.replace('{{' + itemKey + '}}', item[itemKey]);
			} else {
				clonedTemplate = clonedTemplate.replace('{{' + itemKey + '}}', '');
			}
		});
		
		$(clonedTemplate).insertBefore('.menu.item div:last-child');
		console.log(index, item);
	});
});

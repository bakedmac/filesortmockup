$(document).ready(function(){
	makeSortable()
	});

function makeSortable(){
//	$('ol.sortable').nestedSortable({
//		forcePlaceholderSize: true,
//		handle: 'div',
//		helper:	'clone',
//		items: 'li',
//		opacity: .6,
//		placeholder: 'placeholder',
//		revert: 250,
//		tabSize: 25,
//		tolerance: 'pointer',
//		toleranceElement: '> div',
//		maxLevels: 3,
//
//		isTree: true,
//		expandOnHover: 700,
//		startCollapsed: true
//	});
	
	$(document).ready(function(){

		$('.sortable').nestedSortable({
			handle: 'div',
			items: 'li',
			toleranceElement: '> div',
			disableNesting: 'no-nesting'
		});

	});
}


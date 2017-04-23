$(document).ready(function(){
	makeSortable()
	});

function makeSortable(){
	setupNewFolderModal();
	setupEditFolderModal();
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

		$('.sortable').nestedSortable({
			handle: '.move-icon-holder',
			items: 'li',
			toleranceElement: '> div',
			disableNestingClass: 'no-nesting'
		});
}

function setupNewFolderModal(){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("new-folder-button");

	// Get the <span> element that closes the modal
	var span = document.getElementById("cancel-button");
	
	var save = document.getElementById("save-button");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	    $('#folder-name-input').val("")
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        $('#folder-name-input').val("");
	    }
	}
	
	save.onclick = function() {
		var fileName = $('#folder-name-input').val()
		addNewFolder(fileName)
	    modal.style.display = "none";
		$('#folder-name-input').val("");
	}
}

function setupEditFolderModal(){
	// Get the modal
	var modal = document.getElementById('edit-modal');
	
	$(".delete-icon").unbind();
	$(".delete-icon").click(function(){
		var folderToDelete = $(this).closest('li');
		folderToDelete.remove();
	})
	

	// Get the button that opens the modal
	$(".edit-icon").unbind();
	$(".edit-icon").click(function(){
		modal.style.display = "block";
		var folderName = $(this).closest(".title-holder").find(".folder-title").text();
		$('#folder-rename-input').val(folderName);
		currentlyClickedNameHolder = $(this).closest(".title-holder").find(".folder-title")
	})

	// Get the <span> element that closes the modal
	var span = document.getElementById("cancel-rename-button");
	
	var save = document.getElementById("save-rename-button");

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	    $('#folder-rename-input').val("")
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        $('#folder-rename-input').val("");
	    }
	}
	
	save.onclick = function() {
		var editedName = $('#folder-rename-input').val();
		currentlyClickedNameHolder.text(editedName);
	    modal.style.display = "none";
		$('#folder-rename-input').val("");
	}
}

function addNewFolder(fileName){
	var newFolder = $("#new-folder-template").clone();
	newFolder.removeAttr('id');
	newFolder.removeClass("hidden");
	newFolder.find(".folder-title").text(fileName);
	var listHolder = $("#list-holder");
	listHolder.append(newFolder);
	setupEditFolderModal();
}

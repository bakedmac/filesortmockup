$(document).ready(function(){
	makeSortable()
	});

function makeSortable(){
	setupNewFolderModal();
	setupEditFolderModal();
	bindButtonFunctions();

	$('.sortable').nestedSortable({
		handle: '.move-icon-holder',
		items: 'li',
		toleranceElement: '> div',
		disableNestingClass: 'no-nesting'
	});
}

function bindButtonFunctions(){
	$("#new-folder-button").click(function() {
		var modal = $("#myModal");
	    modal.css("display","block");
	});
	
	$(".delete-icon").unbind();
	$(".delete-icon").click(function(){
		var folderToDelete = $(this).closest('li');
		folderToDelete.remove();
	})
	
	$(".edit-icon").unbind();
	$(".edit-icon").click(function(){
		var modal = $("#edit-modal");
		modal.css("display","block");
		var folderName = $(this).closest(".title-holder").find(".folder-title").text();
		$('#folder-rename-input').val(folderName);
		currentlyClickedNameHolder = $(this).closest(".title-holder").find(".folder-title")
	})
}

function setupNewFolderModal(){
	var modal = $("#myModal");

	$("#cancel-button").click(function() {
		modal.css("display","none");
	    $('#folder-name-input').val("")
	});

	$(window).click(function(event) {
	    if (event.target == modal) {
	    	modal.css("display","none");
	        $('#folder-name-input').val("");
	    }
	});
	
	$("#save-button").click(function() {
		var fileName = $('#folder-name-input').val()
		addNewFolder(fileName)
	    modal.css("display","none");
		$('#folder-name-input').val("");
	})
}

function setupEditFolderModal(){
	var modal = $("#edit-modal");

	$("#cancel-rename-button").click(function() {
		modal.css("display","none");
	    $('#folder-rename-input').val("")
	});

	$(window).click(function(event) {
	    if (event.target == modal) {
	    	modal.css("display","none");
	        $('#folder-rename-input').val("");
	    }
	});
	
	$("#save-rename-button").click(function() {
		var editedName = $('#folder-rename-input').val();
		currentlyClickedNameHolder.text(editedName);
		modal.css("display","none");
		$('#folder-rename-input').val("");
	})
}

function addNewFolder(fileName){
	var newFolder = $("#new-folder-template").clone();
	newFolder.removeAttr('id');
	newFolder.removeClass("hidden");
	newFolder.find(".folder-title").text(fileName);
	var listHolder = $("#list-holder");
	listHolder.append(newFolder);
	bindButtonFunctions();
}

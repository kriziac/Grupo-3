(function () {

	'use strict'

	var file = document.getElementById('file');
	var preload = document.querySelector('.preload');
	//var publish = document.getElementById('publish');
	var formData = new FormData();

	file.addEventListener('change', function (e) {

		for ( var i = 0; i < file.files.length; i++ ) {
			var thumbnail_id = Math.floor( Math.random() * 30000 ) + '_' + Date.now();
			createThumbnail(file, i, thumbnail_id);
			formData.append(thumbnail_id, file.files[i]);
		}

		e.target.value = '';

	});

	publish.addEventListener('click', function (e) {
		e.preventDefault();
		preload.classList.add('activate-preload');

		fetch('../server.php', {
			method: 'POST',
			body: formData
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			preload.classList.remove('activate-preload');
			clearFormDataAndThumbnails();
			document.getElementById('success').innerText = data.message;
		})
		.catch(function (err) {
			console.log(err);
		});
	});

	var createThumbnail = function (file, iterator, thumbnail_id) {
		var thumbnail = document.createElement('div');
		thumbnail.classList.add('thumbnail', thumbnail_id);
		thumbnail.dataset.id = thumbnail_id;

		thumbnail.setAttribute('style', `background-image: url(${ URL.createObjectURL( file.files[iterator] ) })`);
		document.getElementById('preview-images').appendChild(thumbnail);
		createCloseButton(thumbnail_id);
	}

	var createCloseButton = function (thumbnail_id) {
		var closeButton = document.createElement('div');
		closeButton.classList.add('close-button');
		closeButton.innerText = 'x';
		document.getElementsByClassName(thumbnail_id)[0].appendChild(closeButton);
	}

	//var clearFormDataAndThumbnails = function () {
		//for ( var key of formData.keys() ) {
			//formData.delete(key);
		//}

		//document.querySelectorAll('.thumbnail').forEach(function (thumbnail) {
			//thumbnail.remove();
		//});
	//}

	//document.body.addEventListener('click', function (e) {
		//if ( e.target.classList.contains('close-button') ) {
			//e.target.parentNode.remove();
			//formData.delete(e.target.parentNode.dataset.id);
		//}
	//});

})();
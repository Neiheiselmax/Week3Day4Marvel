$.ajax({url:
	"https://gateway.marvel.com:443/v1/public/characters?limit=3&apikey=867fcde6869eb1a25f2e7331d4800967",
	success:function(response){
		response.data.results.forEach(function(character){
						$('.characters').append( `
					<div class="character col-md-4">
					<h2>${character.name}</h2>
					<img
				 src="${character.thumbnail.path}.${character.thumbnail.extension}"/>
				 </div>
				 `);
		})
	


}});


$.ajax({url:
	"https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=867fcde6869eb1a25f2e7331d4800967",
	success:function(response){
		response.data.results.forEach(function(comic){
			$('.comicsdiv').append( `
					<div class="comic col-md-4">
					<h2>${comic.title}</h2>
					<img
				 src="${comic.thumbnail.path}.${comic.thumbnail.extension}"/>
				 </div>
				 `);
		})
	


}});
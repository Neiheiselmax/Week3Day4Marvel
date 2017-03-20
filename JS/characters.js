$.ajax({url:
	"https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=867fcde6869eb1a25f2e7331d4800967",
	success:function(response){
		response.data.results.forEach(function(character){
						$('.heros').append( `
					<div class="character col-md-4">
					<h2>${character.name}</h2>
					<img
				 src="${character.thumbnail.path}.${character.thumbnail.extension}"/>
				 	<button class="description">Bio</button>
				 	<div class="moreInfo hide"><h3>${character.description}</h3></div>
				 </div>
				 `);
		})
}});

$('body').on('click','.description',function(){
	$(this).parent().find(".moreInfo").toggleClass("hide")
})
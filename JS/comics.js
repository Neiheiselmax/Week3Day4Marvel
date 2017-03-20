$.ajax({url:
	"https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=867fcde6869eb1a25f2e7331d4800967",
	success:function(response){
		response.data.results.forEach(function(comic){
			console.log(comic)
			$('.allcomics').append( `
					<div class="comic col-md-4">
					<h2>${comic.title}</h2>
					<h2>${comic.prices.price}</h2>
					<img
				 src="${comic.thumbnail.path}.${comic.thumbnail.extension}"/>
				 <button class="description">Synopsis</button>
				 	<div class="moreInfo hide"><h3>${comic.description}</h3></div>
				 </div>
				 `);
		})
	
}});

$('body').on('click','.description',function(){
	$(this).parent().find(".moreInfo").toggleClass("hide")
})
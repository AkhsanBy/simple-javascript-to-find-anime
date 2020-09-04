const tombolCariAnime = document.querySelector("#btn-cari");

tombolCariAnime.addEventListener('click', function() {
	console.log('ok');
	const keywordAnime = document.querySelector("#input-cari").value;
	fetch('https://api.jikan.moe/v3/search/anime?q=' + keywordAnime + '&limit=5')
		.then(response => response.json())
		.then(response => {
			let anime = response.results;
			const hasilAnime = document.querySelector("#hasil-anime");
			let card = '';
			anime.forEach(a => card += cards(a));
			hasilAnime.innerHTML = card;
			document.querySelector("#input-cari").value = '';
		})
		.catch(error => console.error(error))
});

function cards(a) {
	return `
	<div style="margin-bottom: 30px; margin-left: 20px; border: 1px solid black; width: 200px">
		<img style="width: 150px" src="`+ a.image_url +`">
		<h5>`+ a.title +`</h5>
	    <p>Rating `+ a.score +`</p>
	    <a href="`+ a.url +`" target="_blank">Lihat selengkapnya</a>
	</div>
	`;
}
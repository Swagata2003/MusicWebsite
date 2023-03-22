/*const infos = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6fc113ff5msh31f87dc3e2f3f10p1a852ejsn85c2cc910f7d',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/infos', infos)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
//RADIO
const radio = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6fc113ff5msh31f87dc3e2f3f10p1a852ejsn85c2cc910f7d',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D', radio)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
//GENRE
*/
//SEARCH

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6fc113ff5msh31f87dc3e2f3f10p1a852ejsn85c2cc910f7d',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
var form=document.getElementById('register');
var input;
form.addEventListener('submit',function(event){
    event.preventDefault();

    input=document.getElementById('searchTerm').value;
    console.log(input);
    fetching();
});
function fetching(){
fetch(`https://spotify23.p.rapidapi.com/search/?q=%3C${input}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        let c=response.playlists.items[0].data.uri;
        console.log(c);
    })
	.catch(err => console.error(err));
}
let term='';
const updateTerm=()=>{
    term=document.getElementById('searchTerm').value;
    if(!term||term===''){
        alert('Please enter a search term');
    }
    else{
        const url='https://itunes.apple.com/search?term=queen';
        const songcontainer=document.getElementById('songs')
        while(songcontainer.firstChild ){
            songcontainer.removeChild(songcontainer.firstChild);
        }
        fetch(url).then((Response)=>Response.json())
        .then((data)=>{
            console.log(data.results);
            const artists=data.results;
            return artists.map(result=>{
        //html elemnt
            
            const article=document.createElement('article'),
            artists=document.createElement('p'),songs=document.createElement('p'),
            img=document.createElement('img'),
            song=document.createElement('h4'),
            audio=document.createElement('audio'),
            audiosource=document.createElement('source')
        //now put content

            artists.innerHTML=result.artistName;
            song.innerHTML=result.trackName;
            img.src=result.artworkUrl100;
            audiosource.src=result.previewUrl;
            audio.controls=true;

            article.appendChild(img);
            article.appendChild(artists);
            article.appendChild(song);
            article.appendChild(audio);
            audio.appendChild(audiosource);

            songcontainer.appendChild(article);

        })
    })
    .catch(error=>console.log('Request failed:',error))
    }
    
}
const searchbtn=document.getElementById('searchTermBtn');
searchbtn.addEventListener('click',updateTerm);
document.addEventListener('play',event=>{
    const audio=documetn.getElementsByTagName('audio');
    for(let i=0;i<audio.length;i++){
        if(audio[i]!=event.target){
            audio[i].pause();
        }
    }
})


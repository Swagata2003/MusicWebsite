const music=new Audio('docs/audio/1.mp3');
const songs=[
    {
        id:"1",
        songName:'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster:'docs/img/1.jpg',
    },
    {
        id:"2",
        songName:'Alan Walker-Faded<br><div class="subtitle">Alan Walker</div>',
        poster:'docs/img/2.jpg',
    },
    {
        id:"3",
        songName:'Cartoon- On & On<br><div class="subtitle">Daniel Levis</div>',
        poster:'docs/img/3.jpg',
    },
    {
        id:"4",
        songName:'Warriya-Mortals<br><div class="subtitle">Mortals</div>',
        poster:'docs/img/4.jpg',
    },
    {
        id:"5",
        songName:'Ertugrul Gazi<br><div class="subtitle">Ertugrul</div>',
        poster:'docs/img/5.jpg',
    },
    {
        id:"6",
        songName:'Electronic Music<br><div class="subtitle">Electronic</div>',
        poster:'docs/img/6.jpg',
    },
    {
        id:"7",
        songName:'Agar Tum Saath Ho<br><div class="subtitle">Tamasha</div>',
        poster:'docs/img/7.jpg',
    },
    {
        id:"8",
        songName:'Suna Hai<br><div class="subtitle">Neha Kakkar</div>',
        poster:'docs/img/8.jpg',
    },
    {
        id:"9",
        songName:'Dilbar<br><div class="subtitle">Satyameva Jayate</div>',
        poster:'docs/img/9.jpg',
    },
    {
        id:"10",
        songName:'Duniya<br><div class="subtitle">Luka Chuppi</div>',
        poster:'docs/img/10.jpg',
    },
    {
        id:"11",
        songName:'Lagdi Lahore Di<br><div class="subtitle">Strret Dancer 3D</div>',
        poster:'docs/img/11.jpg',
    },
    {
        id:"12",
        songName:'Putt Jatt Da<br><div class="subtitle">Putt Jatt Da</div>',
        poster:'docs/img/12.jpg',
    },
    {
        id:"13",
        songName:'Baarishein<br><div class="subtitle">Atif Aslam</div>',
        poster:'docs/img/13.jpg',
    },
    {
        id:"14",
        songName:'Vaaste<br><div class="subtitle">Dhvani Bhanushali</div>',
        poster:'docs/img/14.jpg',
    },
    {
        id:"15",
        songName:'Lut Gaye<br><div class="subtitle">Jubin Nautiyal</div>',
        poster:'docs/img/15.jpg',
    },
    {
        id:"16",
        songName:'Tu Meri Zindagi Hai Tu<br><div class="subtitle">Jubin Nautiyal</div>',
        poster:'docs/img/16.jpg',
    },
    {
        id:"17",
        songName:'Love me like you do<br><div class="subtitle">Ellie Goulding</div>',
        poster:'docs/img/17.jpg',
    },
    {
        id:"18",
        songName:'Mere Dhol Judaiayan<br><div class="subtitle">Ali Sethi</div>',
        poster:'docs/img/18.jpg',
    },
    {
        id:"19",
        songName:'Eh Munda Pagal Ne Saare<br><div class="subtitle">Ap Dhillion</div>',
        poster:'docs/img/19.jpg',
    },
    {
        id:"20",
        songName:'Night Changes<br><div class="subtitle">One Direction</div>',
        poster:'docs/img/20.jpg',
    },
]
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    //0->first image
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
// let search_results=document.getElementsByClassName('search_results')[0];
// songs.forEach(element=>{
//     const {id,songName,poster}=element;
//     //console.log(id)\
//     let card=document.createElement('a');
//     card.classList.add('card');

//     card.innerHTML=`
//     img src="${poster}" alt="">
//                             <div class="content">
//                                 ${songName}
//                             </div> 
//     `;
//     search_results.appendChild(card);
// })

let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');
let wave1=document.getElementsByClassName('wave1');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}
const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
    el.style.background='rgb(69, 9, 62, .0)';
    })
}
let index=0;
let title=document.getElementById('title');
let download_music=document.getElementById('download_music');
let poster_masterplay=document.getElementById('poster_masterplay');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(element)=>{
        index=element.target.id;
        //console.log(index);
        music.src=`docs/audio/${index}.mp3`;
        poster_masterplay.src=`docs/img/${index}.jpg`;
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        music.play();
        download_music.href=`docs/audio/${index}.mp3`;
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
            //for downloading song with its song name
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
        makeallplays();
        element.target.classList.add('bi-pause-circle-fill');
        element.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    })

})
let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    //console.log(music_curr);
    let music_dur=music.duration;
    //console.log(music_dur);

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    
    currentend.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;
    
    let progressbar=parseInt((music_curr/music_dur)*100);
    //console.log(seek.value);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})
seek.addEventListener('change',()=>{
    music.currentTime=(seek.value*music.duration)/100;
})
let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_dot=document.getElementById('vol_dot');
let vol_bar=document.getElementsByClassName('vol_bar')[0];

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
})
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;  
})
let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`docs/audio/${index}.mp3`;
    poster_masterplay.src=`docs/img/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
    makeallplays();
    element.target.classList.add('bi-pause-circle-fill');
    element.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
})
next.addEventListener('click',()=>{
    index++;
    let l=Array.from(document.getElementsByClassName('songItem')).length;
    if(index>l){
        index=1;
    }
    music.src=`docs/audio/${index}.mp3`;
    poster_masterplay.src=`docs/img/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach(elss=>{
        let {songName}=elss;
        title.innerHTML=songName;
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
    makeallplays();
    element.target.classList.add('bi-pause-circle-fill');
    element.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
})
let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch(a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
        
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');  
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next';
            break;
    }
})

const next_music=()=>{
    if(index==songs.length){
        index=1;
    }
    else{
        index++;
    }
    music.src=`docs/audio/${index}.mp3`;
    poster_masterplay.src=`docs/img/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/${index}.mp3`;
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach(elss=>{
        let {songName}=elss;
         title.innerHTML=songName;
        download_music.setAttribute('download',songName);
        //for downloading song with its song name
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
    makeallplays();
    element.target.classList.add('bi-pause-circle-fill');
    element.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}
const repeat_music=()=>{
    
    music.src=`docs/audio/${index}.mp3`;
    poster_masterplay.src=`docs/img/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/${index}.mp3`;
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach(elss=>{
        let {songName}=elss;
         title.innerHTML=songName;
        download_music.setAttribute('download',songName);
        //for downloading song with its song name
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
    makeallplays();
    element.target.classList.add('bi-pause-circle-fill');
    element.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}
const random_music=()=>{
    if(index==songs.length){
        index=1;
    }
    else{
        index==Math.floor((Math.random()*songs.length)+1);
    }
    music.src=`docs/audio/${index}.mp3`;
    poster_masterplay.src=`docs/img/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/${index}.mp3`;
    let songTitles=songs.filter((els)=>{
        return els.id==index;
    });
    songTitles.forEach(elss=>{
        let {songName}=elss;
         title.innerHTML=songName;
        download_music.setAttribute('download',songName);
        //for downloading song with its song name
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(69, 9, 62, 0.699)';
    makeallplays();
    element.target.classList.add('bi-pause-circle-fill');
    element.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}
music.addEventListener('ended',()=>{
    //index++;
   let b=shuffle.innerHTML;
   switch(b){
    case 'repeat':
        repeat_music();
        break;
    case 'next':
        next_music();
        break;
    case 'random':
        random_music();
        break;
   } 
})

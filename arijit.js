const music=new Audio('docs/audio/arijit/1.mp3');
const songs=[
    {
        id:"1",
        songName:'Tum Hi Ho<br><div class="subtitle">Aashiqui 2</div>',
        poster:'docs/img/arijit/1.jpg',
    },
    {
        id:"2",
        songName:'Khairiyat<br><div class="subtitle">Chhichhore</div>',
        poster:'docs/img/arijit/2.jpg',
    },
    {
        id:"3",
        songName:'Desh Mere<br><div class="subtitle">Bhuj: The Pride of India</div>',
        poster:'docs/img/arijit/3.jpg',
    },
    {
        id:"4",
        songName:'Dhokha<br><div class="subtitle">Mortals</div>',
        poster:'docs/img/arijit/4.jpg',
    },
    {
        id:"5",
        songName:'Tera Yaar Hoon Main<br><div class="subtitle">Sonu Ke Titu Ki Sweety</div>',
        poster:'docs/img/arijit/5.jpg',
    },
    {
        id:"6",
        songName:'Chunar<br><div class="subtitle">ABCD 2</div>',
        poster:'docs/img/arijit/6.jpg',
    },
    {
        id:"7",
        songName:'Galti Se Mistake<br><div class="subtitle">Jagga Jasoos</div>',
        poster:'docs/img/arijit/7.jpg',
    },
    {
        id:"8",
        songName:'Hamari Adhuri Kahani<br><div class="subtitle">Hamari Adhuri Kahani</div>',
        poster:'docs/img/arijit/8.jpg',
    },
    {
        id:"9",
        songName:'Naki Ki Raah<br><div class="subtitle">Traffic</div>',
        poster:'docs/img/arijit/9.jpg',
    },
    {
        id:"10",
        songName:'Humdard<br><div class="subtitle">Ek Villain</div>',
        poster:'docs/img/arijit/10.jpg',
    },
    {
        id:"11",
        songName:'Mera Yaaraa<br><div class="subtitle">Sooryavanshi</div>',
        poster:'docs/img/arijit/11.jpg',
    },
    {
        id:"12",
        songName:'Nashe Si Chadh Gayi<br><div class="subtitle">Befikre</div>',
        poster:'docs/img/arijit/12.jpg',
    },
    {
        id:"13",
        songName:'Ae Watan<br><div class="subtitle">Raazi</div>',
        poster:'docs/img/arijit/13.jpg',
    },
    {
        id:"14",
        songName:'Agar Tum Sath Ho<br><div class="subtitle">Tamasha</div>',
        poster:'docs/img/arijit/14.jpg',
    },
    {
        id:"15",
        songName:'Pachtaoge<br><div class="subtitle">Jaani Ve</div>',
        poster:'docs/img/arijit/15.jpg',
    }
    
]
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    //0->first image
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
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
let index=1;
let title=document.getElementById('title');
let download_music=document.getElementById('download_music');
let poster_masterplay=document.getElementById('poster_masterplay');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(element)=>{
        index=element.target.id;
        //console.log(index);
        music.src=`docs/audio/arijit/${index}.mp3`;
        poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        music.play();
        download_music.href=`docs/audio/arijit/${index}.mp3`;
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
    music.src=`docs/audio/arijit/${index}.mp3`;
    poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
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
    music.src=`docs/audio/arijit/${index}.mp3`;
    poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
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
    music.src=`docs/audio/arijit/${index}.mp3`;
    poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/arijit/${index}.mp3`;
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
    
    music.src=`docs/audio/arijit/${index}.mp3`;
    poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/arijit/${index}.mp3`;
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
    music.src=`docs/audio/arijit/${index}.mp3`;
    poster_masterplay.src=`docs/img/arijit/${index}.jpg`;
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    music.play();
    download_music.href=`docs/audio/arijit/${index}.mp3`;
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
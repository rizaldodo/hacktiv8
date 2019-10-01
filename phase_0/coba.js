function sortPlaylist(playlist) {
  var title = [];
  var song = [];
  var sortedSong = [];
  for(i=0; i<playlist.length; i++){
      var counter = 0;
      if(title.length == 0){
          title.push(playlist[i]);
      }else{
          for(j=0; j<title.length; j++){
              if(title[j] === playlist[i]){
                  counter++;
              }
            }
            if(counter == 0){
                title.push(playlist[i]); 
            }
      }
  }
  for(i=0; i<title.length; i++){
      var freq = 0;
      for(j=0; j<playlist.length; j++){
        if(playlist[j] === title[i]){
            freq++
        }
      }
      song.push([title[i], freq]);
  }

  for(i=0; i<song.length; i++){
      for(j=0; j<song.length-i-1; j++){
          if(song[j][1] > song[j+1][1]){
              temp = song[j];
              song[j] = song[j+1];
              song[j+1] = temp;
          }
      }
  }

  for(i=0; i<song.length; i++){
    sortedSong.push(song[i][0]);
  }
//   console.log(song);
  return sortedSong;

}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));
// [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

console.log(sortPlaylist(['Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown']));
// [ 'Location Unknown', 'Donna Donna', 'Top of The World' ]

console.log(sortPlaylist([])); // []
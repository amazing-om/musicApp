const music = [{
    "filterType": "ALBUM",
    "id": 1,
    "name": "Dewana",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
  },{
    "filterType": "ALBUM",
    "id": 2,
    "name": "Best of Me: Sonu Nigam",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
  },{
    "filterType": "ALBUM",
    "id": 3,
    "name": "Phir Milenge Chalte Chalte",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
  },{
    "filterType": "ARTIST",
    "id": 4,
    "name": "Alka Yagini",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
  },{
    "filterType": "ARTIST",
    "id": 5,
    "name": "Ali Zafar",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
  },{
    "filterType": "SONGS",
    "id": 6,
    "name": "Ab mujhe raat din ....",
    "url": "http://royalwap.net/sample.php?id=359409"
  },{
    "filterType": "SONGS",
    "id": 7,
    "name": "Dewana Tera ...",
    "url": "http://cloud1.raag.me/Pop/Deewana-(Sonu Nigam)/Deewana Tera-Sonu Nigam[48]::Raag.Me::.mp3"
}]
 

function list(state = music, action) {
  switch (action.type) {
    case 'SHOW_LIST':
      return state
    default:
      return state
  }
}

export default list

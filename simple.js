
function displayCard() {
  var x = document.getElementById("card");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.display = "flex";
  }
  // else {
  //     x.style.display = "none";
  // }
}
function diisplayMultipleCards() {
  var x = document.getElementById("multi-card");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.display = "flex";
  } 
  // else {
  //   x.style.display = "none";
  // }
}
function showOnHower(id) {
  var data = {
    'single-1': {
      text: 'How you feel about yourself',
      img: 'Road.jpeg',
    },
    'single-2': {
      text: 'How you feel about yourself',
      img:'nature.jpg' 

    },
    'single-3': {
      text: 'How you feel about yourself',
      img: 'images.jpeg'
    },
    'single-4': {
      text: 'How you feel about yourself',
      img: 'Road.jpeg',
    },
    'single-5': {
      text: 'How you feel about yourself',
      img: 'tree.jpg'
    },
    'single-6': {
      text: 'pHow you feel about yourself',
      img: 'nature.jpg'
    },
    'single-7': {
      text: 'How you feel about yourself',
      img: 'Road.jpeg'
    },
    'single-8': {
      text: 'How you feel about yourself',
      img: 'tree.jpg'
    },

  };
  let clickedData = data[id]
  let htmlElement = '<p><img class="p-img" src="' + clickedData['img'] + '" width="100" height="140">' + clickedData['text'] + "" +clickedData['paragraph'] +'</p>'
  document.getElementById("showDecard").innerHTML = htmlElement;
}


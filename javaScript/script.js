
// global variables

// arrays

var abcd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var prob = ["8.167", "1.492", "2.202", "4.253", "12.702", "2.228", "2.015", "6.094", "6.966", "0.153", "1.292", "4.025", "2.406", "6.749", "7.507", "1.929", "0.095", "5.987", "6.327", "9.356", "2.758", "0.978", "2.56", "0.15", "1.994", "0.077"]

var performers = ["Arlo Guthrie",  "Carlos Santana", "Country Joe & The Fish", "Credence Clearwater Revival",
                   "Crosby Stills Nash & Young","The Greatful Dead", "Janis Joplin", 
                   "Jimi Hendrix", "Joan Baez", "Joe Cocker", "Joni Mitchel", "Richie Havens", 
                   "Ten Years After", "The Who"];

var songs = ["arlo.mp3", "santana.mp3", "CountryJoe.mp3", "CCR.m4a",
             "csny.mp3", "jerry.m4a", "janis.m4a", 
             "jimi.mp3",  "joan.mp3", "joe.mp3", "joni.mp3", "richie.mp3", 
             "tya.mp3", "who.mp3"];

  // bpL1 is the banner pictures for use in the 1-2-6-2-1 banner layout ant the left 1 grid space, and so on . . .
  // for the url we append L1|R1|L2|R2 and .png as done below
var bpL1 = ["jerry", "jimi", "joni"];
var bpL2 = ["joe", "CountryJoe", "jimi", "santana", "alee", "joni"];
var bpR1 = ["arlo", "janis", "tya"];
var bpR2 = ["CCR", "csny", "janis", "joan", "richie", "TheWho"];


var performerPics = [bpR1 [0],  bpL2[3], bpL2[1], bpR2[0],
                    bpR2[1], bpL1[0], bpR2[2],
                    bpL2 [2], bpR2[3], bpL2[0], bpL2[5], bpR2[4],
                    bpR1[2], bpR2[5]];

for (let i = 0; i < performers.length; i++) {
  console.log(performers[i] + "; " + performerPics[i] + "; " + songs[i] + "\n");
}

var song = "./music/" + songs[10];
  console.log(song);

// functions 

// function to play sound

function playIt(sound) {
  var x = document.createElement("AUDIO");
    x.setAttribute("src",sound);
    x.setAttribute("autoplay","true");
    x.load();
    x.play();
    document.body.appendChild(x);
}
// end of function to play sound

// function to fade text


function fadeOut(target) {
  console.log(target);
  var sopac = 1;
  var fopac = 0;
  var elem = document.getElementById(target);   
  var id = setInterval(frame, 10);
  function frame() {
    if (sopac == fopac) {
      clearInterval(id);
    } else {
      sopac = sopac - 0.005; 
      elem.style.opacity = sopac; 
      }
  }
}

/* function fadeIn(element) {
  var duration = 0.5;
  var interval = 10;//ms
  var op = 0.0;
  var iop = element.style.opacity;
  var timer = setInterval(function () {
      if (op >= iop) {
          op = iop;
          clearInterval(timer);
      }
      element.style.opacity = op;
      op += op/((1000/interval)*duration);
  }, interval);
} */

// procedures

$(document).ready(function() {

  // choose artist name

  // compute difficulty based on letter frequency arrays

  // compute number of guesses incorporating name length and degree of difficulty

  // set parameters
      // start slide shows
        // banner images (artists)
        // center images (crowd)

  // initalize
    // start woodstock song
    // put word to guess template in word container
    // display  remaining guesses
    // display wins
    //display attempst
    // display 'Press any key to get started!' over center image

  // on key stroke
    // remove msg over center image
    // ignore duplicates
    // if miss 
      // add to keys already guessed
      // decrement guesses left
      // if guesses left = 0 and word incomplete, new game
      // if guesses left > 0 play buzzer
      // await user input

    // if hit
      // play ding sound
      // display letter in word to guess conainer
      // if word to guess complete
        // play ding sound,
        //display artists picture
        //play artists song
        // new game
      // if word to guess incomplete
      // show 'Press another key'  message
      // await user input

    //var clabcd = abcd.indexOf("c");
    //console.log(abcd.indexOf("c"));
    //console.log(prob[clabcd]);
    // console.log(prob);

    document.onkeyup = function(event) {
      fadeOut("start"); 
    };
     console.log("*");
    playIt(song);
      console.log("**");
/*     fadeIn("start");
    console.log("**");
 */
});
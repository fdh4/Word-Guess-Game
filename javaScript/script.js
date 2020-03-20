
// global variables

// arrays

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
function playIt(sound) {
  var x = document.createElement("AUDIO");
    x.setAttribute("src",sound);
    x.setAttribute("autoplay","true");
    x.load();
    x.play();
    document.body.appendChild(x);
}

var myguess = "";
// procedures

$(document).ready(function() {

  playIt(song);

});
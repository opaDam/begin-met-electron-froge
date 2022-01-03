// console.log('ok');
const fs = require("fs");
const path = require("path");
const { listenerCount } = require("process");
// ///////////////////////////////////////////////////////
let dir_path = `${__dirname}/../muziek/`; // dir_path = MUZIEK MAP PATH
let array_audio = [];
// ///////////////////////////////////////////////////////
array_audio = [
    "America   Sister Golden Hair (with lyrics",
    "Celine Dion - I m Alive",
    "Mamita mía   Miguel Moly (Letra[1]",
    "St Bernard Walt"
]
// // maak ARRAYs //////////////////////////////////////
function read_dir() {
  fs.readdir(dir_path, (err, files) => {
    if (err) {
      console.log(err);
    }
    if (files) {
      files.forEach((file, index) => {
        if (path.extname(file) !== ".mp3") {
          return;
        }
        if (path.extname(file) === ".mp3") {
          file = file.substring(0, file.length - 4);
          array_audio.push(file); // ***** ARRAY 
        }

        console.log(index + " - " + file);
        const prt = document.getElementById('prt_ul');

        for (let index = 0; index < array_audio.length; index++) {
            let list = array_audio[index];
            prt.innerHTML += "<li>"+list+"</li>"  
        }
      });
    }
  });
}
// EINDE /////////////////////////////////////////////////
read_dir();

const prt = document.getElementById('prt_ul');

for (let index = 0; index < array_audio.length; index++) {
    let list = array_audio[index];
    prt.innerHTML += "<li>"+list+"</li>"  
}
    





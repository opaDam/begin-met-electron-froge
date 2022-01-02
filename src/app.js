// console.log('ok');
const fs = require("fs");
const path = require("path");
// ///////////////////////////////////////////////////////
let dir_path = `${__dirname}/../muziek/`; // dir_path = MUZIEK MAP PATH
let array_audio = [];
// ///////////////////////////////////////////////////////

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
        return array_audio;
      });
    }
  });
}
// EINDE /////////////////////////////////////////////////
read_dir();

const print = document.querySelector('.prt_ul');

array_audio.forEach((file, index) => {
    print.innerHTML += `<li>${file}</li>`;
})


// [
//     "America   Sister Golden Hair (with lyrics",
//     "Celine Dion - I m Alive",
//     "Mamita mía   Miguel Moly (Letra[1]",
//     "St Bernard Walt"
// ]


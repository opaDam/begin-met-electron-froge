// console.log('ok');
const fs = require("fs");
const path = require("path");
// ///////////////////////////////////////////////////////
let dir_path = `${__dirname}/../muziek/`; // dir_path = MUZIEK MAP PATH
// let dir_path = `${__dirname}/../mp3/`; // dir_path = MUZIEK MAP PATH
let array_audio = [];
// let array_audio2 = [];
// let array_base64 = [];
// let array_search = [];
// let array_search2 = [];
// let array_local = [];
// let array = [];
// let x = 1,
//   index = 0,
//   songPlay,
//   blue_dump0,
//   blue_dump1,
//   artist0,
//   title0,
//   num;
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
          array_audio.push(file); // ARRAY ////////
        //   array_audio2.push(file);
        }
        // console.log(index + " - " + file);
      });

    //   shuffle();
      // array = array_audio2;
      // read_tags();
    }
  });
}
// EINDE /////////////////////////////////////////////////
read_dir();

[
    "America   Sister Golden Hair (with lyrics",
    "Celine Dion - I m Alive",
    "Mamita mía   Miguel Moly (Letra[1]",
    "St Bernard Walt"
]

[
    "America   Sister Golden Hair (with lyrics",
    "Celine Dion - I m Alive",
    "Mamita mía   Miguel Moly (Letra[1]",
    "St Bernard Walt"
]
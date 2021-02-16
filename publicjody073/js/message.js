var nama = "jody";
var email = "jody@mail.com";
var phone = "085850739012";
var message = "this a message from jody";

const fs = require('fs');
// const { Script } = require('vm');

// Data which will write in a file. 
var data = message;
var namefile = (nama + "-" + email + "-" + phone + ".txt");
// Write data in 'Output.txt' . 
fs.writeFile(namefile, data, (err) => {

    // In case of a error throw err. 
    if (err) throw err;
});

// var txt = new ActiveXObject("Scripting.FileSystemObject");
// var s = txt.CreateTextFile(namefile, true);
// s.WriteLine(data);
// s.Close();
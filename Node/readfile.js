const fs = require(`fs`)

const filename = process.argv[2];

if(!filename){
    console.log("please provide a file name.");
    process.exit(1);
}
fs.readFile(filename, 'utf8', (err, data) => {
    if (err){
        console.log(`Error reading file : ${err}`);
        process.exit(1);

    }
    console.log("File Conntent");
    console.log(data);
})
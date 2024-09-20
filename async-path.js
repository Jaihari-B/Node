const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(`No file found in the name provided !`);
        return null;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `The result is ${first}, ${second}`
        ,(err,result) => {
            if(err){
                console.log(err);
                return null;
            }
            console.log(result);
        })
    })
})
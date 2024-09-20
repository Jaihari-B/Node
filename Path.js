const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
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
            './content/async-2.txt',
            `The result is ${first} and ${second}`,
            {flag: 'a'},
            (err,result) => {
                if(err){
                    console.log(err);
                    return null;
                }
                console.log(result);
            }
        )
    })
})
//Asyncronous

const {readFile,writeFile}=require('fs');
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    //console.log(result);
    const second=result;
    writeFile('./content/result-async.txt',
    `Here is the result : ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Done');
    }
    )
}
)})
// if we don't provide encoding we get buffer
console.log('starting next task');
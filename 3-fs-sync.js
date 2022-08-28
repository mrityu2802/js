//syncronous

//using destructuring
const {readFileSync,writeFileSync}=require('fs');
//const fs=require('fs');  //Another Method
//fs.readFileSync
console.log('Start');
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

// console.log(first,second);
writeFileSync('./content/result_sync.txt',
`here is the result :${first},${second}`,
{flag:'a'})

console.log('done with the task');
console.log('Starting new task');
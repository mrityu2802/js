//commonjs, every file is module(by default)
//Modules - Encapsslated code (only share minimum)

//or instead of name we can use {john,pete}
const name=require('./3-name');
const sayhi=require('./3-utils');
const data=require('./3-exportalternative')
require('./3-mindgrenade')



// console.log(data);
// sayhi('mrityu');
// sayhi(name.john);
// sayhi(name.pete);
//commonjs, every file is module(by default)
//Modules - Encapsslated code (only share minimum)


const secret='super secret';
const john='john';
const pete='pete';
const sayhi=(name)=>{
    console.log(`Hello there ${name}`);
}
sayhi('mrityu');
sayhi('susan');
sayhi(john);
sayhi(pete);
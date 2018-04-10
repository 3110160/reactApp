let a= 1;
let b = ++a;
let obj = {t:3}
console.log(b);
console.log(a);

console.log(Object.hasOwnProperty);
console.log({}.hasOwnProperty);
console.log(Object.defineProperties);

Object.defineProperty(obj,"value1",{
    get:function(){return 10;}
});
console.log(obj.value1);

function check(args){
    let actual=args.length;
    let expected=args.callee.length;
    if(actual!=expected){
        throw new Error("Wrong number of arguments");
    }
}

function t(x,y) {
    console.log(arguments.length)
    console.log(arguments.callee.length)
    //check(arguments);
    return x+y
}

t(1,2,5);

//点图标搜索
/*
let result = [
    {
        floor:1,
        locals:[{
            x:111,
            y:222,
            name:'',
            pic:'http://___' //如果有图片
        },{
            x:111,
            y:222,
            name:'',
        },{
            x:111,
            y:222,
            name:'',
        },{
            x:111,
            y:222,
            name:'',
        }]
    }
];

//模糊搜索

result = [
    {
        name:'',
        local:{x:222,y:11}
    }
];*/

let pp=1+2+" blind mine";
let bb="blind mine "+1+2;
console.log(pp);
console.log(bb);

function copy(obj) {
    let _obj = {};
    for(let key in obj){
        console.log(key)
        _obj[key]=obj[key]
    }
    return _obj;
}

let _tt={a:3,v:4};
let tt = copy(_tt);

_tt.v=3;

console.log('tt',tt);
console.log('_tt',_tt);


if(typeof ss == 'undefined'){
    console.log(33333)
}

if(!ss){
    console.log(22222)
}else {
    console.log(343434)
}
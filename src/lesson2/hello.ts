//http://www.typescriptlang.org/play/index.html

/*//多行字符串及字符串模板
var myName = "soufun"
console.log(`hello ${myName}`); //hello soufun

var getName = function(){
    return "fang";
}
console.log(`hello ${getName()}`)   //hello fang

console.log(`<div>
    <p>${myName}</p>
</div>`)
*/



/* //类型

var myName:string = "fang";
myName = 13;
var alias = "xixi"; //类型推断机制
alias = 123;
var ali:any = "haha";
ali = 123;

var age:number = 13;
var isTrue:boolean = true;

function test(name:string):string{
    return "";
}
test(123);

//自定义类型
class Person{
    name : string
    age : number
}
var zhangsan:Person = new Person();
zhangsan.age = 1;

interface Car{
    name : string
    wheels : number
}

var lisi:Car = {
    name : 'lisi',
    wheels : 12
};
console.log(lisi.name) */



/* //参数默认值
function test(a:string,b:string,c:string="jojo"){
    console.log(a);
    console.log(b);
    console.log(c);
}

test('hi','asd') */

/* //可选参数
function test(a:string,b?:number){
    console.log(a);
    console.log(b);
}

test('hello'); */

/* //箭头表达式 用来声明匿名函数，消除传统匿名函数中this指向问题
var sum = (arg1,arg2)=>arg1+arg2;
var cns = arg1 => {
    console.log(arg1);
}

function GetStock(name){
    this.name = name;

    setInterval(function(){
        console.log('name is:'+this.name);
    },1000)
}

var stock = new GetStock('张三'); */

/*
//类 Typescript的核心，使用Typescript开发时，大部分代码都是写在类里面的
class Person{
    constructor(name:string){
        this.name = name;
    }
    private name:string
    
    eat(){
        console.log(this.name+"is eating")
    }
    private sleep(){
        console.log(this.name+"is eating")
    }
}

var zhangsan = new Person('张三');
zhangsan.eat()


class Student extends Person{
    constructor(name:string,stuId:number){
        super(name);
        this.stuId = stuId;
    }
    stuId : number
}
var stu = new Student('小明',123);
stu.eat()
*/

/*
//接口
interface Animal{
    eat();
}

class Sheep implements Animal{
    eat(){
        console.log("i eat grass")
    }
}

interface Fun{
    (source : string,sub:string):boolean;
}

var mySearch:Fun = function(source:string,sub:string){
    return source==sub;
}
*/


/*
//泛型
function Hello<T>(arg:T):T{
    return arg;
}
var ouput = Hello<string>('xiaoming');
*/

/*
//模块
import * as funcs from './funcs';

funcs.func1()
*/

declare var aaa:string

declare function getName(id:string):string

declare class People{
    public sayName(str:string):string
}

declare namespace OOO{
    var aaa: number | string
    function getName(id: number | string): string
    class Person {

        static maxAge: number //静态变量
        static getMaxAge(): number //静态方法

        constructor(name: string, age: number) //构造函数
        getName(id: number): string //实例方法
    }
}

// 实例方法 
interface Date {
    format(f: string): string
}

declare var $ :{
    fullPage(obj:object):void
}
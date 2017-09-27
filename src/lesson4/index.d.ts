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


interface JQuery {
    fadeIn(): JQuery;
    fadeOut(): JQuery;
    focus(): JQuery;
    html(): string;
    html(val: string): JQuery;
    show(): JQuery;
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    append(el: HTMLElement): JQuery;
    val(): string;
    val(value: string): JQuery;
    attr(attrName: string): string;
}
declare var $: {
    (el: HTMLElement): JQuery;
    (selector: string): JQuery;
    (readyCallback: () => void ): JQuery;
};

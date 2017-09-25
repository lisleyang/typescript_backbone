//基本应用
class People{
    name : string
    constructor(name:string){
        this.name = name;
    }
    sayName (){
        console.log(this.name);
    }
}

new People('Fang').sayName();
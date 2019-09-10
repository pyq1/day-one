class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    talk(msg){
        console.log(`我是${this.name},我今年${this.age},我会${msg}`)
    }
}

export default Person
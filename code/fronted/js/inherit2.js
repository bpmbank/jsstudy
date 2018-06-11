//经典继承
function SuperType(){
    this.colors = ["red","blue","green"]
}

function SubType(){
    //继承了SuperType
    SuperType.call(this)
}

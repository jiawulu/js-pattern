/**
 * Created with JetBrains WebStorm.
 * User: luu
 * Date: 13-8-10
 * Time: 下午9:28
 * To change this template use File | Settings | File Templates.
 */

function Parent(name){
    this.name = name;
}

Parent.prototype.say = function(){
    console.log("Parent say : " + this.name);
}

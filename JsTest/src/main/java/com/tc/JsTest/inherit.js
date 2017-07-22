//inherit()返回一个继承自原型对象p的属性的新对象
//这里使用ECMAScript 5中的Object.create()函数（如果存在的话）
//如果不存在，则退化使用其他方法
function inherit(p){
	if(p == null){//p是一个对象，但不能是null
		throw TypeError();
	}
	if(Object.create){//如果Object.create()存在，则直接使用
		return Object.create(p);
	}
	var t = typeof(p);//不存在则进一步检测
	if(t !== 'object' && tt !== 'function'){
		throw TypeError();
	}
	function f(){};//定义一个空构造函数
	f.prototype = p;//将其原型属性设置为
	return new f(p);//使用f()创建p的继承对象
}
//==修改继承对象的属性值，原始对象不受影响==//
var o1 = {x:'hello'};
var o2 = inherit(o1);
o2.x = 'hh';
alert(o1.x);
alert(o2.x);
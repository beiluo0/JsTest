1.delete 只能删除对象自身属性，不能删除继承属性。
2. var a = 1;//声明一个全局变量，
	delete this.a;//不能删除，
	///
	this.x = 1;//创建一个可配置的全局属性（没有用var）
	delete x;//可以删除
3. in //检验属性
	var obj = {x:1};
	'x' in obj;//true
	'y' in obj;//fasle
	'tostring' in obj;//true ，obj继承tostring属性
	
	hasOwnProperty()//自身属性
	var obj = {x:1};
	obj.hasOwnPeoperty('x');//true
	obj.hasOwnPeoperty('x');//false
	obj.hasOwnPeoperty('tostring');//false、 tostring是继承属性
	
	propertyIsEnumerable()//检验自身属性、且是可枚举的
	var  o = inherit({y:2});
	o.x = 1;
	o.propertyIsEnumerable('x');//true
	o.propertyIsEnumerable('y');//fasle
	Object.prototype.propertyIsEnumerable('tostring');//false.不可枚举
4. forEach()   for/in  常规for循环
	var data = [1,2,3,4,5];
	var sumOfSquares = 0;
	data.forEach(function(x){
		sumOfSquares += x*x;
	});
5. 二维数组，存放九九乘法表
	var table = new Array(10);
	for (var i = 0; i < table.length; i++) {
		table[i] = new Array(10);
	}
	for (var row = 0; row < table.length; row++) {
		for (var col = 0; col < table[row].length; col++) {
			table[row][col] = row*col;
		}
	}
	var product = table[5][7];//查询
6. Array.join()  <==>  String.splice()
7. Array.reverse();//颠倒
8. Array.sort();//排序、默认按字母表顺序排序、undefined放在尾部
	var a = [33, 4, 1111, 222];
	a.sort();//1111,222,33,4
	a.sort(function(a,b){//从小到大
		return a-b;//根据顺序，返回负数、0、正数
	});
	a.sort(function(a,b){//从大到小
		return b-a;//
	});
	//==不区分大小写==//
	var a = ['ant', 'Bug', 'cat', 'Dog'];
	a.sort();//区分大小写排序 Bug、Dog、ant、cat
	a.sort(function(s, t){//不区分大小写
		var a = s.toLowerCase();
		var b = t.toLowerCase();
		if(a < b){return -1;}
		if(a > b){return 1;}
		return 0;
	});
	
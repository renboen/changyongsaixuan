//in判断对象是否有该属性，针对对象指的是属性，针对数组指的是索引
var obj = {
	'a': 1
};
console.log("a" in obj)
console.log(obj.hasownproperty('a'))

//按照对象属性排序
var arr = [{
		name: 'zopp',
		age: '0'
	},
	{
		name: 'gpp',
		age: '18'
	},
	{
		name: 'yjj',
		age: '8'
	}
];

function compare(property) {
	return function(a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value1 - value2;
	}
}
console.log(arr.sort(compare('age')))

//身份证号验证
function identityCodeValid(code) {
	var city = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	var tip = "";
	var pass = true;

	if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
		tip = "身份证号格式错误";
		pass = false;
	} else if(!city[code.substr(0, 2)]) {
		tip = "地址编码错误";
		pass = false;
	} else {
		//18位身份证需要验证最后一位校验位
		if(code.length == 18) {
			code = code.split('');
			//∑(ai×Wi)(mod 11)
			//加权因子
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			//校验位
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for(var i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]) {
				tip = " 校验位错误";
				pass = false;
			}
		}
	}
	return pass;
}

//多维数组转化为一维数组

var arr = [1, [2, [
	[3, 4], 5
], 6]];
var newArr = [];

function fun(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			fun(arr[i]);
		} else {
			newArr.push(arr[i]);
		}
	}
}
fun(arr);
console.log(newArr); //[1, 2, 3, 4, 5, 6]

//数组去重
var arr = ["a", '1', "b", "a", 1, "b"];

console.log(arr.filter(function(item, index) {

	return arr.indexOf(item) == index
}))

//参考http://www.cnblogs.com/lhyhappy65/p/6061143.html

//slice(start,end);
//substring(start,end);
//substr(start,length);
//slice 传负数就与长度相加;
//substr当传递的参数为负值时，方法会将负的第一个参数与字符串的长度相加，将负的第二个参数转化 为0
//substring传负数就变成0;
//slice和substring截取长度为end-start;
//slice start>end返回'';
//substring start>end会自动把晓得值当做start把大的值当做end；

str.slice(2)
console.log(str.length)
console.log(str.substring(5, 2))
console.log(str)

//基于指定的分隔符将一个字符串分割成多个字符串，并将结果存放在一个数组中，可以传两个参数，第一个参数为分隔符，第二个参数用于指定返回数组的大小，若省略该参数，则返回整个数组
console.log(str.split(" ", 1))
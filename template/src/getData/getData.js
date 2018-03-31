import fetch from '../util/fetch'
// 默认的baseUrl为空， 自己设置新的API地址
fetch.baseUrl = '这是本项目的API地址'

// 可以使用fetch来获取数据, 如下面例子，引入cityGuess的时候只需要import {cityGuess} from getData的路径
/*
export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});
*/
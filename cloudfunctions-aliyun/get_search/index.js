'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// const list = await db.collection('article').field({
	// 	content:false // 表示返回的数据里面不要content内容 若为true则只返回content内容
	// }).get();
	
	const {user_id,value} = event
	let option = {};
	
	// 聚合：更精细化处理数据 求和 分组 指定哪些字段
	const list = await db.collection('article')
	.aggregate()
	// 追加字段
	.project({
		content:false
	})
	// 筛选出符合条件的列表
	.match({
		title: new RegExp(value)  //用正则去匹配文章的标题
	})
	.end()

	return {
		code:200,
		msg:'数据请求成功',
		data:list
	}
};

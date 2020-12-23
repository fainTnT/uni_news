'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	// const list = await db.collection('article').field({
	// 	content:false // 表示返回的数据里面不要content内容 若为true则只返回content内容
	// }).get();
	
	const {user_id,name,pageSize=5,page=1} = event
	let option = {};
	if(name != '全部'){
		 option = {
			classify: name
		}
	}
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	// 聚合：更精细化处理数据 求和 分组 指定哪些字段
	const list = await db.collection('article')
	.aggregate()
	// 追加字段
	.addFields({
		is_like:$.in(['$_id',article_likes_ids])
	})
	.match(option)
	.project({
		content:false
	})
	// 要跳过多少数据
	.skip(pageSize*(page-1))
	.limit(pageSize)
	.end()

	return {
		code:200,
		msg:'数据请求成功',
		data:list
	}
};

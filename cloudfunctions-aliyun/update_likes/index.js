'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {user_id,article_id} = event;
	const userInfo = await db.collection('user').where({id:user_id}).get()
	const article_id_ids = userInfo.data[0].article_likes_ids
	
	let dbCmdFuns = null;
	// 如果收藏列表存在就删除 如果不存在就添加
	if(article_id_ids.includes(article_id)){
		dbCmdFuns = dbCmd.pull(article_id)
	}else {
		dbCmdFuns = dbCmd.addToSet(article_id)
	}
	
	await db.collection('user').where({id:user_id}).update({
		article_likes_ids:dbCmdFuns
	})
	
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:userInfo.data[0]
	}
};

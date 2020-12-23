'use strict';
const db=uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const{
		user_id
	}=event
	
	//author_likes_ids
	let userinfo=await db.collection('user').doc(user_id).get()
	userinfo=userinfo.data[0]
	
	let lists=await db.collection('user').aggregate() // 聚合 根据用户关注列表里面的ID去用户数据库筛选
						.addFields({
							is_like:$.in(['$id',userinfo.author_likes_ids],)
						}).match({
							is_like:true
						}).end()
	
	//返回数据给客户端
	return {
		code:200,
		msg:'数据获取成功！',
		data:lists.data
	}
};

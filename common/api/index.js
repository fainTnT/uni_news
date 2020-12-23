import $http from "./http.js"
// 获取tab栏列表
const get_label = (data) => {
	return $http({
		name:'get_label',
		data
	})
}

const get_list = (data) => {
	return $http({
		name:'get_list',
		data
	})
}

const update_likes = (data) => {
	return $http({
		name:'update_likes',
		data
	})
}

const get_search = (data) => {
	return $http({
		name:'get_search',
		data
	})
}

const update_label = (data) => {
	return $http({
		name:'update_label',
		data
	})
}

const get_detail = (data) => {
	return $http({
		name:'get_detail',
		data
	})
}
const get_comments = (data) => {
	return $http({
		name:'get_comments',
		data
	})
}
const update_comment = (data) => {
	return $http({
		name:'update_comment',
		data
	})
}
const update_author = (data) => {
	return $http({
		name:'update_author',
		data
	})
}
const update_thumbsup = (data) => {
	return $http({
		name:'update_thumbsup',
		data
	})
}
const get_author = (data) => {
	return $http({
		name:'get_author',
		data
	})
}
const get_follow = (data) => {
	return $http({
		name:'get_follow',
		data
	})
}
const get_user = (data) => {
	return $http({
		name:'get_user',
		data
	})
}
const get_my_article = (data) => {
	return $http({
		name:'get_my_article',
		data
	})
}

export default {
	get_label,
	get_list,
	update_likes,
	get_search,
	update_label,
	get_detail,
	get_comments,
	update_comment,
	update_author,
	update_thumbsup,
	get_author,
	get_follow,
	get_user,
	get_my_article
}
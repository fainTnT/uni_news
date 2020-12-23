(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home-detail/home-detail"],{

/***/ 53:
/*!******************************************************************************************************!*\
  !*** E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/main.js?{"page":"pages%2Fhome-detail%2Fhome-detail"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _homeDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/home-detail/home-detail.vue */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_homeDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 54:
/*!***********************************************************************************!*\
  !*** E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-detail.vue?vue&type=template&id=2d304a06& */ 55);
/* harmony import */ var _home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-detail.vue?vue&type=script&lang=js& */ 57);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-detail.vue?vue&type=style&index=0&lang=scss& */ 59);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/home-detail/home-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/*!******************************************************************************************************************!*\
  !*** E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=template&id=2d304a06& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-detail.vue?vue&type=template&id=2d304a06& */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_template_id_2d304a06___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 56:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=template&id=2d304a06& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  commentsBox: function() {
    return Promise.all(/*! import() | components/comments-box/comments-box */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/comments-box/comments-box")]).then(__webpack_require__.bind(null, /*! @/components/comments-box/comments-box.vue */ 111))
  },
  uniIcons: function() {
    return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 103))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 57:
/*!************************************************************************************************************!*\
  !*** E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-detail.vue?vue&type=script&lang=js& */ 58);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 58:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uParse = function uParse() {Promise.all(/*! require.ensure | components/gaoyia-parse/parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/gaoyia-parse/parse")]).then((function () {return resolve(__webpack_require__(/*! @/components/gaoyia-parse/parse.vue */ 119));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var popup = function popup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 127));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


































































{
  components: {
    uParse: uParse,
    popup: popup },

  data: function data() {
    return {
      formData: {},
      noData: '<p stye="text-align:center;color:#666">加载中....</p>',
      commentsList: [],
      showPopup: false,
      commentsValue: '' };

  },
  onLoad: function onLoad(query) {
    this.formData = {};
    var data = JSON.parse(query.params);
    this.formData = data;
    this.getDetail();
    this.getComments();
  },
  methods: {
    // 请求评论内容
    getComments: function getComments() {var _this = this;
      this.$api.get_comments({
        article_id: this.formData._id }).
      then(function (res) {var
        data = res.data;
        _this.commentsList = data;
      });
    },
    showComments: function showComments() {
      uni.navigateTo({
        url: '/pages/detail-comments/detail-comments?id=' + this.formData._id });

    },
    addToThumbs: function addToThumbs(id) {
      this.setUpdateThumbs(id);
    },
    addToLike: function addToLike(id) {
      this.setUpadteLike(id);
    },
    setUpdateThumbs: function setUpdateThumbs(article_id) {var _this2 = this;
      uni.showLoading();
      this.$api.update_thumbsup({
        article_id: article_id }).
      then(function (res) {
        uni.hideLoading();
        if (!_this2.formData.is_thumbs_up) {
          _this2.formData.is_thumbs_up = true;
          _this2.formData.thumbs_up_count++;
        }
        uni.showToast({
          title: res.msg });

      }).catch(function (err) {
        uni.hideLoading();
      });
    },
    // 收藏文章 
    setUpadteLike: function setUpadteLike(article_id) {var _this3 = this;
      uni.showLoading();
      this.$api.update_likes({
        article_id: article_id }).
      then(function (res) {
        uni.hideLoading();
        _this3.formData.is_like = !_this3.formData.is_like;
        uni.$emit('update_article', 'follow');
        uni.showToast({
          title: _this3.formData.is_like ? '收藏成功' : '取消收藏',
          icon: 'none' });

        //console.log('收藏成功');
      }).catch(function (err) {
        uni.hideLoading();
      });
    },
    follwAuthor: function follwAuthor(author_id) {var _this4 = this;
      uni.showLoading();
      this.$api.update_author({
        author_id: author_id }).
      then(function (res) {
        uni.hideLoading();
        _this4.formData.is_author_like = !_this4.formData.is_author_like;
        uni.showToast({
          title: _this4.formData.is_author_like ? '关注作者成功' : '取消关注作者',
          icon: 'none' });

        uni.$emit("update_author");
      }).catch(function (err) {
        uni.hideLoading();
      });
    },
    getDetail: function getDetail() {var _this5 = this;
      this.$api.get_detail({
        article_id: this.formData._id }).
      then(function (res) {var
        data = res.data;
        _this5.formData = data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 打开评论发布窗口
    openComment: function openComment() {
      this.$refs.popup.open();
    },
    // 关闭弹窗
    close: function close() {
      this.$refs.popup.close();
    },
    // 发布
    submit: function submit() {
      if (!this.commentsValue) {
        uni.showToast({
          title: '请输入评论内容',
          icon: 'none' });

        return;
      }
      this.setUpdateComment(this.commentsValue);
      this.commentsValue = '';
    },
    setUpdateComment: function setUpdateComment(content) {var _this6 = this;
      var formdata = {
        article_id: this.formData._id,
        content: content };

      // console.log(formdata);
      uni.showLoading();
      this.$api.update_comment(formdata).then(function (res) {
        uni.hideLoading();
        uni.showToast({
          title: '评论发布成功' });

        _this6.getComments();
        _this6.close();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 59:
/*!*********************************************************************************************************************!*\
  !*** E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../kaifagongju/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home-detail.vue?vue&type=style&index=0&lang=scss& */ 60);
/* harmony import */ var _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_kaifagongju_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HTML+CSS+JS/Vue/uniapp/object/uni_news/pages/home-detail/home-detail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[53,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home-detail/home-detail.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8831bb"],{"58bd":function(t,e,a){"use strict";var i=a("dda6"),s=a.n(i);s.a},c0b3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all_gn"},[a("me-header",{attrs:{title:"demo",hasLeft:"",hasRight:""}}),a("div",{staticClass:"item",on:{click:t.showLoading}},[t._v("loading")]),a("div",{staticClass:"item",on:{click:t.showToast}},[t._v("toast")]),a("div",{staticClass:"item",on:{click:t.showMsgBox}},[t._v("messageBox")]),a("me-switch",{staticClass:"item",model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}}),a("me-radio",{staticClass:"item",attrs:{options:t.options},model:{value:t.radioValue,callback:function(e){t.radioValue=e},expression:"radioValue"}}),a("meCheckbox",{staticClass:"item",attrs:{options:t.checkboxList},model:{value:t.checkboxValue,callback:function(e){t.checkboxValue=e},expression:"checkboxValue"}}),a("div",{staticClass:"item"},[a("me-step",{attrs:{currentVal:t.steps,stepArray:t.stepList,model:"dot"}}),a("me-step",{attrs:{currentVal:t.steps,stepArray:t.stepList,model:"origin"}})],1),a("me-icon",{staticClass:"item",attrs:{name:"right",size:"30"},on:{click:t.click}}),a("me-input",{staticClass:"item",attrs:{type:"text",placeholder:"请输入姓名",isMust:"",align:"left",maxlength:"50",showClose:""},on:{meChange:t.change,meFocus:t.meFocus,meBlur:t.meBlur},model:{value:t.inputvalue,callback:function(e){t.inputvalue=e},expression:"inputvalue"}}),a("div",{staticClass:"item"},[a("me-textarea",{attrs:{isCount:"",maxNum:"30",placeholder:"请输入"},on:{input:t.textareaInput},model:{value:t.textareValue,callback:function(e){t.textareValue=e},expression:"textareValue"}})],1),a("div",{staticClass:"item"},[a("div",{on:{click:function(e){t.showPopup=!t.showPopup}}},[t._v("popup")]),a("me-popup",{attrs:{position:"center"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[t._v("可从上、下、左、右、中间五个方位弹出来：position取值为：left、top、right、bottom、center")])],1),a("div",{staticClass:"item"},[a("div",{on:{click:t.showPickerData2}},[t._v("一列选择")]),a("me-picker",{ref:"picker",attrs:{pickerData:t.data1,title:"选择标题"},on:{confirm:t.confirm,cancel:t.cancel,pickerChange:t.pickerChange}})],1),a("div",{staticClass:"item"},[a("div",{on:{click:t.showPickerData}},[t._v("多列选择")]),a("me-double-picker",{ref:"doublePicker",attrs:{pickerData:t.pickerData,title:"多列选择"},on:{pickerChange:t.doublepickerChange,confirm:t.doubleconfirm,cancel:t.doublecancel}})],1),a("div",{staticClass:"item"},[a("div",{on:{click:t.showPickerData3}},[t._v("省市区选择")]),a("me-city-picker",{ref:"cityPicker",attrs:{cityData:t.pickerData2,title:"省市区选择"},on:{pickerChange:t.citypickerChange,confirm:t.cityconfirm,cancel:t.citycancel}})],1),a("div",{staticClass:"item"},[a("me-cell",{attrs:{name:"姓名",value:"李世民"}}),a("me-cell",{attrs:{name:"朝代",value:"唐朝",rightIcon:"right"}}),a("me-cell",{attrs:{name:"朝代",value:"唐朝",leftIcon:"user"}})],1),a("div",{staticClass:"item"},[a("div",{on:{click:t.chooseDate}},[t._v("时间选择")]),a("me-datepicker",{ref:"datepicker",attrs:{defaultTime:"2020-01-19",title:"时间选择",type:"date",startDate:"2009-01-01",endDate:"2025-12-31"},on:{confirm:t.dateConfirm,cancel:t.dateCancel,dateChange:t.dateChange}})],1),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/index"})}}},[t._v("上拉刷新下拉加载")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/cart"})}}},[t._v("基于mescroll上拉刷新下拉加载")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/login"})}}},[t._v("tab")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/order"})}}},[t._v("左滑删除")]),a("div",{staticClass:"item"},[a("div",[t._v("滑块当前值："+t._s(t.slidervalue))]),a("me-slider",{attrs:{min:0,max:100,showTip:"never"},on:{input:t.sliderinput,onChange:t.sliderchange},model:{value:t.slidervalue,callback:function(e){t.slidervalue=e},expression:"slidervalue"}})],1),a("div",{staticClass:"item"},[a("me-progress",{attrs:{percentage:70,type:"line",strokeLinecap:"round"}}),a("me-progress",{attrs:{percentage:70,type:"circle",strokeLinecap:"round"}})],1),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/progress"})}}},[t._v("树形图")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/swiper"})}}},[t._v("轮播图")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/lazyPicture"})}}},[t._v("图片懒加载")]),a("div",{staticClass:"item",on:{click:t.getAxios}},[t._v("接口调用实例")]),a("div",{staticClass:"item",on:{click:t.getMock}},[t._v("mock调用实例")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/upload"})}}},[t._v("图片上传")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/select"})}}},[t._v("select选择")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/dropDown"})}}},[t._v("dropdown")]),a("div",{staticClass:"item"},[a("div",[t._v("评分")]),a("me-rate",{attrs:{allowHalf:"",totalScore:"6"},on:{input:t.changerate},model:{value:t.score,callback:function(e){t.score=e},expression:"score"}})],1),a("div",{staticClass:"item"},[a("div",[t._v("公告栏")]),a("me-roll-notice",{attrs:{list:t.list,defaultIndex:"0",time:"3000",direction:"column"}})],1),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/rollNotice"})}}},[t._v("折叠面板")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/pagination"})}}},[t._v("分页")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/table"})}}},[t._v("表格")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/lottery"})}}},[t._v("九宫格抽奖")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/lotteryTurn"})}}},[t._v("转盘抽奖")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/tabFloor"})}}},[t._v("楼层导航")]),a("div",{staticClass:"item",on:{click:function(e){return t.$router.push({path:"/baiduMap"})}}},[t._v("地图")])],1)},s=[],c={data(){return{list:[{text:"天下第一"},{text:"神雕侠侣"},{text:"射雕英雄传"}],switchValue:!1,radioValue:"",options:[{text:"中国",value:"1"},{text:"日本",value:"2"}],checkboxList:[{text:"中国",value:"1"},{text:"日本",value:"2"}],checkboxValue:[],steps:2,stepList:["苏妲己苏妲己","姜子牙","哪吒","杨戬","孙悟空","武庚","雷震子"],inputvalue:"张三",textareValue:"",showPopup:!1,score:"3",picker:{title:"我问问",data:[],name:"1111",pickerClass:"",anchor:[]},data1:[{value:"1",text:"test1"},{value:"2",text:"test2"},{value:"3",text:"test3"}],data3:[{value:"1",text:"test1"},{value:"2",text:"test2"},{value:"3",text:"test3"}],data2:[{value:"1",text:"test1",children:[{value:"1",text:"test1"}]},{value:"2",text:"test2",children:[{value:"2",text:"test2"},{value:"3",text:"test3"},{value:"4",text:"test4"}]},{value:"3",text:"test3",children:[{value:"3",text:"test3"}]}],pickerData:[],pickerData2:[{text:"北京市",value:"110000",children:[{text:"北京市",value:"110100",children:[{text:"城东",value:"110101"}]}]},{text:"天津市",value:"120000",children:[{text:"天津市",value:"120000"}]},{text:"河北省",value:"130000",children:[{text:"石家庄市",value:"130100"},{text:"唐山市",value:"130200"},{text:"秦皇岛市",value:"130300"},{text:"邯郸市",value:"130400"},{text:"邢台市",value:"130500"},{text:"保定市",value:"130600"},{text:"张家口市",value:"130700"},{text:"承德市",value:"130800"}]},{text:"山西省",value:"140000",children:[{text:"太原市",value:"140100",children:[{text:"太原市1",value:"1401001"},{text:"太原市2",value:"1401002"}]},{text:"大同市",value:"140200",children:[{text:"大同市1",value:"1402001"},{text:"大同市2",value:"1402002"}]},{text:"阳泉市",value:"140300"},{text:"长治市",value:"140400"},{text:"晋城市",value:"140500"},{text:"朔州市",value:"140600"},{text:"晋中市",value:"140700"}]}],slidervalue:7}},watch:{switchValue(t){console.log(this.switchValue)},radioValue(t){console.log(this.radioValue)},checkboxValue(t){console.log(this.checkboxValue)},inputvalue(){console.log(this.inputvalue)}},methods:{showLoading(){this.$loading.show("加载中..."),setTimeout(()=>{this.$loading.hide()},3e3)},showToast(){this.$toast.show("hello world")},showMsgBox(){this.$msgBox({title:"警告",content:"请输入姓名！",sureText:"同意",showCancel:!0,cancelText:"不同意"}).then(()=>{console.log("同意")}).catch(()=>{console.log("不同意")})},click(){},change(t){},textareaInput(t){console.log(t)},meFocus(t){},meBlur(t){},showPickerData2(){this.$refs.picker.show()},cancel(){},confirm(t){console.log(t)},pickerChange(t){console.log(t)},showPickerData(){this.pickerData=[this.data2,this.data1,this.data3],this.$refs.doublePicker.show()},doublepickerChange(t){console.log(t)},doubleconfirm(t){console.log(t)},doublecancel(){},showPickerData3(){this.$refs.cityPicker.show()},citypickerChange(t){console.log(t)},cityconfirm(t){console.log(t)},citycancel(){},chooseDate(){this.$refs.datepicker.show()},dateConfirm(t){console.log(t)},dateCancel(){},dateChange(t){console.log(t)},sliderinput(t){},sliderchange(t){console.log(t)},toSign(){this.$refs.tosign.sign("张三","zs","zs").then(t=>{console.log(t)})},async getAxios(){let t={idx:"1"};await this.$get(this.$api.top_list,t).then(t=>{console.log(t)})},async getMock(){await this.$post(this.$api.mockTest).then(t=>{console.log(t)})},changerate(t){console.log(t)}}},l=c,o=(a("58bd"),a("e90a")),n=Object(o["a"])(l,i,s,!1,null,"53309188",null);e["default"]=n.exports},dda6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6b8831bb.f1750bd2.js.map
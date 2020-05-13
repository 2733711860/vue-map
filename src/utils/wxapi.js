/**
 * 微信js-sdk
 * 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 */
import wx from 'weixin-js-sdk'
import Axios from 'axios'
import apis from '@/api'
const wxApi = {
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  wxRegister (callback) {
    // 这边的接口请换成你们自己的
    let params = new URLSearchParams()
//  params.append('url', location.href.split('#')[0])
    params.append('url', 'http://tdev.jxlife.com.cn/policypreserve/index.html')
    Axios.post(apis.getAppId, params).then((res) => {
      let { appid, noncestr, signature, timestamp } = res.data.wechatJsInfo
      wx.config({
        debug: false, // 开启调试模式
        appId: appid, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: signature, // 必填，签名，见附录1
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'hideMenuItems',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'showAllNonBaseMenuItem',
          'translateVoice',
          'startRecord',
          'stopRecord',
          'onRecordEnd',
          'playVoice',
          'pauseVoice',
          'stopVoice',
          'uploadVoice',
          'downloadVoice',
          'chooseImage',
          'previewImage',
          'uploadImage',
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
    }).catch((error) => {
      console.log(2222222222222222)
      console.log(error)
    })
    wx.ready((res) => {
      console.log(11111111111111)
      console.log(res)
      // 如果需要定制ready回调方法
      if (callback) {
        callback()
      }
    })
  },
  /**
   * [ShareTimeline 微信分享到朋友圈]
   * @param {[type]} option [分享信息]
   * @param {[type]} success [成功回调]
   * @param {[type]} error   [失败回调]
   */
  ShareTimeline (option) {
    wx.onMenuShareTimeline({
      title: option.title, // 分享标题
      link: option.link, // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
      }
    })
  },
  /**
   * [ShareAppMessage 微信分享给朋友]
   * @param {[type]} option [分享信息]
   * @param {[type]} success [成功回调]
   * @param {[type]} error   [失败回调]
   */
  ShareAppMessage (option) {
    wx.onMenuShareAppMessage({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
      }
    })
  },
  ShareUpload (option) {
    // 用于微信JS-SDK回调
    wx.chooseImage({
      count: 1,
      sourceType: ['camera'],
      success: function (res) {
        option.localId = res.localIds
        option.serverId = []
        wx.uploadImage({
          localId: option.localId[0],
          success: function (res) {
            option.serverId.push(res.serverId)
            option.success()
          }
        })
      }
    })
  },
  closeWindow () {
    wx.closeWindow()
  },

  //利用getLocation获取当前位置的经纬度坐标
  mapViewTap () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude, // 纬度，浮点数，范围为90 ~ -90
          longitude: res.longitude, // 经度，浮点数，范围为180 ~ -180
          scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
//        name: '', // 位置名
//        address: '', // 地址详情说明
//        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        })
      }
    })
  },

  //wx.chooseLocation(OBJECT) 打开地图选择位置
  chooseMapViewTap (e) {
    var that=this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          location:{
            latitude:res.latitude,
            longitude: res.longitude,
            name:res.name,
            address:res.address
          }
        })
      },
    })
  }
}
export default wxApi

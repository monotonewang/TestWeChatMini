//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546091159&di=2e1f0e228f82f8d36bccfbbcdad35860&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.16888.com%2FpicLib%2F57772%2F57781%2F2010011821543399.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545497658344&di=09ef768fafb97c8e0675db07c9bd533d&imgtype=0&src=http%3A%2F%2Fimg.hx2car.com%2Fupload%2Fcar%2F2015%2F3%2F24%2F10%2F66%2F60%2F83%2F21%2Fsmall%2F800_600.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545496442842&di=7e21e13d5a9acf1e34ace480a1c5e363&imgtype=0&src=http%3A%2F%2Fwww.ctps.cn%2FPhotoNet%2FProfiles2011%2F20130314%2F20133141811476302.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    myImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546091159&di=2e1f0e228f82f8d36bccfbbcdad35860&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.16888.com%2FpicLib%2F57772%2F57781%2F2010011821543399.jpg',
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
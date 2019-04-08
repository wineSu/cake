// pages/component/timer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    h: '00',
    m: '00',
    s: '00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getShowTime(val) {
      let d = parseInt(val / (1000 * 60 * 60 * 24));
      let h = parseInt((val % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = parseInt((val % (1000 * 60 * 60)) / (1000 * 60));
      let s = parseInt((val % (1000 * 60)) / 1000);
      d = d < 10 ? "0" + d : d;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      this.setData({
        h,
        m,
        s
      })
    },
    init(){
      const todayEndTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;
      const nowTime = new Date().getTime();
      let offsetTime = todayEndTime - nowTime;
      this.setData({
        offsetTime
      })
    },
    settimes: function () {
      const that = this;
      let time = this.data.offsetTime - 1000
      this.setData({
        offsetTime: time
      });
      this.getShowTime(time)
      let ss = setTimeout(function () {
        that.settimes()
      }, 1000);
      
      if (time < 1000) {
        that.init();
      }
    }
  },
  ready(){
    this.init()
    this.settimes()
  }
})

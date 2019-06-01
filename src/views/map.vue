<template>
  <div class="china-map">
    <div ref="china" class="china"></div>
  </div>
</template>

<script>
import 'echarts/map/js/china.js'
export default {
  data() {
    return {
      key: 1,
      chart: null,
      provinces: [],
      provincesText: [],
      seriesData: []
    }
  },
  mounted() {
    this.chart = this.echarts.init(this.$refs.china)
    this.provinces = [
      'shanghai',
      'hebei',
      'shanxi',
      'neimenggu',
      'liaoning',
      'jilin',
      'heilongjiang',
      'jiangsu',
      'zhejiang',
      'anhui',
      'fujian',
      'jiangxi',
      'shandong',
      'henan',
      'hubei',
      'hunan',
      'guangdong',
      'guangxi',
      'hainan',
      'sichuan',
      'guizhou',
      'yunnan',
      'xizang',
      'shanxi1',
      'gansu',
      'qinghai',
      'ningxia',
      'xinjiang',
      'beijing',
      'tianjin',
      'chongqing',
      'xianggang',
      'aomen'
    ]
    this.provincesText = [
      '上海',
      '河北',
      '山西',
      '内蒙古',
      '辽宁',
      '吉林',
      '黑龙江',
      '江苏',
      '浙江',
      '安徽',
      '福建',
      '江西',
      '山东',
      '河南',
      '湖北',
      '湖南',
      '广东',
      '广西',
      '海南',
      '四川',
      '贵州',
      '云南',
      '西藏',
      '陕西',
      '甘肃',
      '青海',
      '宁夏',
      '新疆',
      '北京',
      '天津',
      '重庆',
      '香港',
      '澳门'
    ]
    this.seriesData = [
      {
        name: '北京',
        value: 100
      },
      {
        name: '天津',
        value: 0
      },
      {
        name: '上海',
        value: 60
      },
      {
        name: '重庆',
        value: 0
      },
      {
        name: '河北',
        value: 60
      },
      {
        name: '河南',
        value: 60
      },
      {
        name: '云南',
        value: 0
      },
      {
        name: '辽宁',
        value: 0
      },
      {
        name: '黑龙江',
        value: 0
      },
      {
        name: '湖南',
        value: 60
      },
      {
        name: '安徽',
        value: 0
      },
      {
        name: '山东',
        value: 60
      },
      {
        name: '新疆',
        value: 0
      },
      {
        name: '江苏',
        value: 0
      },
      {
        name: '浙江',
        value: 0
      },
      {
        name: '江西',
        value: 0
      },
      {
        name: '湖北',
        value: 60
      },
      {
        name: '广西',
        value: 60
      },
      {
        name: '甘肃',
        value: 0
      },
      {
        name: '山西',
        value: 60
      },
      {
        name: '内蒙古',
        value: 0
      },
      {
        name: '陕西',
        value: 0
      },
      {
        name: '吉林',
        value: 0
      },
      {
        name: '福建',
        value: 0
      },
      {
        name: '贵州',
        value: 0
      },
      {
        name: '广东',
        value: 597
      },
      {
        name: '青海',
        value: 0
      },
      {
        name: '西藏',
        value: 0
      },
      {
        name: '四川',
        value: 60
      },
      {
        name: '宁夏',
        value: 0
      },
      {
        name: '海南',
        value: 60
      },
      {
        name: '台湾',
        value: 0
      },
      {
        name: '香港',
        value: 0
      },
      {
        name: '澳门',
        value: 0
      }
    ]
    this.init(this.chart, 'china', '中国')
  },
  methods: {
    init(chart, pName, Chinese_) {
      chart.setOption({
        title: {
          text: Chinese_ || pName,
          left: 'center'
        },
        series: [
          {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: false, // 是否开启鼠标缩放和平移漫游
            itemStyle: {
              // 地图区域的多边形 图形样式
              normal: {
                // 是图形在默认状态下的样式
                label: {
                  show: true, // 是否显示标签
                  textStyle: {
                    color: 'rgba(255,255,255,0)'
                  }
                }
              },
              emphasis: {
                // 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                label: { show: true }
              }
            },
            data: this.seriesData,
            top: '3%' // 组件距离容器的距离
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.china-map
  width 90%
  margin 0 auto
  .china
    width 800px
    height 800px
</style>

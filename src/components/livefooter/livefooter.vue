<template>
<div class="tab border-1px">
	<div class="tab-item" @click="ischat()" id="tab-item">
	    <h1 :class="[datas[0].isshow?'active':'']">聊天</h1>
  		<chat v-if="datas[0].isshow"></chat> 
	</div>
	<div class="tab-item" @click="isanchor()" id="tab-item">
	    <h1 :class="[datas[1].isshow?'active':'']">主播</h1>
  		<anchor v-if="datas[1].isshow" class="tab-list"></anchor>
	</div>
	<div class="tab-item" @click="isconlist()" id="tab-item">
	    <h1 :class="[datas[2].isshow?'active':'']">贡献榜</h1>
  		<conlist v-if="datas[2].isshow" class="tab-list"></conlist>
	</div>
	<div class="tab-item" @click="isattention()" id="tab-item">
		<h1 :class="[datas[3].isshow?'active':'']">已关注</h1>
  		<attention v-if="datas[3].isshow" class="tab-list"></attention>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
import chat from './chat/chat'
import anchor from './anchor/anchor'
import conlist from './conlist/conlist'
import attention from './attention/attention'

export default {
  components: {
    chat,
    anchor,
    conlist,
    attention
  },
  data () {
    return {
      datas: [
        {isshow: false},
        {isshow: false},
        {isshow: false},
        {isshow: false}
      ],
      music: {},
      $index: Object
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.datas[1].isshow = true
    })
  },
  methods: {
    ischat () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[0].isshow = true
      }
    },
    isanchor () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[1].isshow = true
      }
    },
    isconlist () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[2].isshow = true
      }
    },
    isattention () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[3].isshow = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
  
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      h1
        font-size: 15px
        opacity: 0.6
        &.active
          border-bottom: 2px solid red
          opacity: 1
          color: red
      .tab-list
        position: absolute
        left: 0
        top: 40px
</style>

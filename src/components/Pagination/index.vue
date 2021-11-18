<template>
  <div class="pagination">
    <button :disabled="myCurrentPage === 1" @click="setCurrentPage(myCurrentPage-1)">上一页</button>
    <button v-if="startEnd.start != 1" @click="setCurrentPage(1)">1</button>
    <button v-if="startEnd.start > 2" disabled>...</button>
    <button 
      v-for="item in startEndArr" :key="item" 
      :class="{active: item=== myCurrentPage}"
      @click="setCurrentPage(item)"
      >{{item}}
    </button>
    <button disabled v-if="startEnd.end < totalPage-1">...</button>
    <button v-if="startEnd.end < totalPage" @click="setCurrentPage(totalPage)">{{totalPage}}</button>
    <button :disabled="myCurrentPage === totalPage" @click="setCurrentPage(myCurrentPage+1)">下一页</button>
    <button disabled>共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "MyPagination",
    props:{
      currentPage:{ //当前页码
        type:Number,
        default:1
      },
      total:{//总页码
        type:Number,
        default:0
      },
      pageSize:{//每页最大显示数
        type:Number,
        default:10
      },
      showPageNo:{//最大连续页码数
        type:Number,
        default:5,
        //要求传入的值是奇数 validator验证使用的
        validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return value%2 === 1
        }
      },
    },
    data () {
      return {
        myCurrentPage:this.currentPage //初始值有父组件指定
      }
    },
    computed:{
      //总页数
      totalPage(){
        const {total,pageSize} = this
        return Math.ceil(total/pageSize)
      },
      //start/end 连续页码数的开始页码于结束页码 {start:3,end:7}
      startEnd(){
        let start , end
        const {myCurrentPage,showPageNo,totalPage} = this
        //当前页码currentPage
        //最大连续页码数 showPageNo
        
        //计算start
        start = myCurrentPage - Math.floor(showPageNo/2)
        if(start<1) start = 1

        //计算end
        end = start + showPageNo -1
        if(end > totalPage){
          end = totalPage
          //修正start
          start = end - showPageNo + 1
          if(start<1) start = 1
        } 
        return {
          start,
          end
        }
      },
      startEndArr () {
        const {start, end} = this.startEnd
        const arr = []
        for (let i = start; i <=end; i++) {
          arr.push(i)
        }
        return arr
      },

    },
    methods:{
      setCurrentPage (page) {
        if (page===this.myCurrentPage) return
        // 更新内部的当前页码
        this.myCurrentPage = page
        // 通知父组件当前页码变化了
        this.$emit('currentChange', page)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
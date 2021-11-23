<template>
  <div ref="vantTable" class="vant-table box-container">
    <table
      :class="[{'first-column-sticky': firstColumnSticky}, {'last-column-sticky': lastColumnSticky}]"
    >
      <thead>
        <tr>
          <th
            class="th"
            v-for="(item, index) in columns"
            :key="index"
          >
            <div
              class="th-div"
              :class="{'order': index !== 0, 'first-cloumn': index === 0}"
              :style="styleComputed(item.width)"
              @click="rankClick(item, index)"
            >
              
              <span class="cloumn-name">{{ $t(`app.columns.${item.name}`) }}</span>
              <span class="icon-wrap">
                <!--<van-icon v-if="index !== 0" class='iconfont' class-prefix='icon' :name='rankIcon(item.order)'></van-icon>-->
                <svg v-if="index !== 0 && item.isSort" class="icon" aria-hidden="true">
                  <!-- <use :xlink:href="rankIcon(item.order)"></use> -->
                  <use :xlink:href="rankIcon(item.prop)"></use>
                </svg>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in bodyData"
          :key="index"
          class="list-tr"
        >
          <td
            v-for="(context, i) in headComputed"
            :key="i"
            :class="classComputed(item, context, i)"
          >
            <!--   :class="classComputed(item[`lift${context.prop}`])"-->
            <van-popover
              v-if="descComputed(item, context)"
              v-model="item.showDesc"
              trigger="click"
            >
              <div class="desc-content">{{ descContent(item, context) }}</div>
              <template #reference>
                <div class="td-div">
                  {{ item[context.prop] }}
                </div>
              </template>
            </van-popover>
            <div
              v-else
              class="td-div"
            >
              {{ item[context.prop] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headData: {
      type: Array,
      default: () => [],
    },
    bodyData: {
      type: Array,
      default: () => [],
    },
    firstColumnSticky: {
      type: Boolean,
      default: false,
    },
    lastColumnSticky: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      columns: [],
      orderField: null,
      order: '',
    };
  },
  created () {
    this.$watch('headData', () => {
      this.columns = this.headData.map(item => ({
        ...item,
        // order: '',
      }));
      // this.orderField = null;
      // this.order = '';
      // console.log('bodyData', this.bodyData);
      // console.log('headComputed', this.headComputed);
    }, { immediate: true });
  },
  computed: {
    headComputed () {
      return this.headData;
    },
    rankIcon () {
      return (prop) => {
        let result = '#icon-Rank_None';
        if (prop === this.orderField) {
          if (this.order === 'asc') {
            result = '#icon-Rank_Up';
          }
          if (this.order === 'desc') {
            result = '#icon-Rank_Down';
          }
          if (this.order === '') {
            result = '#icon-Rank_None';
          }
        }
        return result;
      };
      // return (order) => {
      //   let result = '#icon-Rank_None';
      //   if (order === 'asc') {
      //     result = '#icon-Rank_Up';
      //   }
      //   if (order === 'desc') {
      //     result = '#icon-Rank_Down';
      //   }
      //   return result;
      // };
    },
    // classComputed () {
    //   return (lift) => {
    //     console.log('lift', lift);
    //     let result = '';
    //     if (lift) {
    //       result = 'red';
    //     }
    //     return result;
    //   };
    // },
    classComputed () {
      return (item, context, i) => {
        // 转驼峰
        const toUpperCase = context.prop.trim().replace(context.prop[0], context.prop[0].toUpperCase());
        const lift = +item[`lift${toUpperCase}`];
        let result = '';
        if (i === 0) {
          result += 'first-td';
        }
        if (lift === 1) {
          result += 'red';
        } else if (lift === 2) {
          result += 'yellow';
        } else if (lift === 3) {
          result += 'green';
        }
        return result;
      };
    },
    descComputed () {
      return (item, context) => {
        let result = false;
        const toUpperCase = context.prop.trim().replace(context.prop[0], context.prop[0].toUpperCase());
        const field = item[`desc${toUpperCase}`];
        if (field) {
          result = true;
        }
        return result;
      };
    },
    descContent () {
      return (item, context) => {
        let result = '';
        const toUpperCase = context.prop.trim().replace(context.prop[0], context.prop[0].toUpperCase());
        const field = item[`desc${toUpperCase}`];
        if (field) {
          result = field;
        }
        return result;
      };
    },
    styleComputed () {
      return (width) => {
        let result = '';
        if (width) {
          result = `width: ${width}px; max-width: ${width}px; min-width: ${width}px;`;
        }
        return result;
      };
    },
  },
  watch: {
    headComputed: {
      handler () {
        this.order = '';
        this.orderField = '';
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    rankClick (obj, index) {
      if (index === 0) {
        return;
      }
      if (!obj.isSort) {
        return;
      }
      if (this.orderField !== obj.prop) {
        this.orderField = obj.prop;
        this.order = 'asc';
      } else {
        const cacheOrder = this.order;
        if (cacheOrder === '') {
          this.order = 'asc';
        }
        if (cacheOrder === 'asc') {
          this.order = 'desc';
        }
        if (cacheOrder === 'desc') {
          this.order = '';
          this.orderField = '';
        }
      }
      // this.columns.forEach((item) => {
      //   if (item.prop !== obj.prop) {
      //     item.order = '';
      //   }
      // });
      // this.orderField = obj.prop;
      // const cacheOrder = obj.order;
      // if (cacheOrder === '') {
      //   obj.order = 'asc';
      // }
      // if (cacheOrder === 'asc') {
      //   obj.order = 'desc';
      // }
      // if (cacheOrder === 'desc') {
      //   obj.order = '';
      // }
      // console.log('obj.order', obj.order);
      const order = {
        orderField: this.orderField,
        order: this.order,
      };
      // const order = {
      //   orderField: obj.order === '' ? '' : obj.prop,
      //   order: obj.order,
      // };
      this.$emit('setOrder', order);
    },
    clearRankIcon () {
      this.orderField = '';
      this.order = '';
      const order = {
        orderField: this.orderField,
        order: this.order,
      };
      this.$emit('setOrder', order);
    },
  },
};
</script>

<style lang="less" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .desc-content {
    font-size: 14px;
    width: 150px;
    padding: 12px;
  }
  .vant-table {
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    table {
      border-collapse: separate;
      border: 0;
      border-spacing: 0;
      table-layout: fixed;
      thead {
        tr {
          th {
            position: sticky;
            position: -webkit-sticky;
            top: 0;
            padding-top: 1px;
            padding-bottom: 1px;
            height: 46px;
            line-height: 22px;
            background: #DFDFDF;
            text-align: center;
            width: 100%;
            .th-div {
              min-width: 80px;
              width: 100%;
              max-width: 100%;
              // padding-left: 8px;
              // padding-right: 8px;
              margin: 0 auto;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            &:first-child {
              z-index: 2;
              .th-div {
                width: 90px;
                width: 100%;
                max-width: 100%;
                // padding-left: 8px;
                // padding-right: 8px;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            &:last-child {
              z-index: 2;
            }
          }
        }
      }
      tbody {
        tr {
          &:nth-child(even) {
            td {
              background: #FAFAFA;
              // background: rgba(235, 235, 235, 0.3);
            }
          }
          td {
            text-align: center;
            height: 54px;
            line-height: 54px;
            // background: #000;
            background: #FFFFFF;
            border-bottom: 1px dashed #EBEBEB;
            .td-div {
              width: 100%;
              height: 100%;
              // padding-left: 8px;
              // padding-right: 8px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .van-popover__wrapper {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            &:first-child {
              // text-align: left;
              width: 90px !important;
              .td-div {
                height: auto;
                line-height: 27px;
                white-space: normal;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                // -webkit-box-align: start;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
            &.red {
              color: #B03320;
            }
            &.yellow{
              color: #FFC000;
            }
            &.green {
              color: #00B050;
            }
          }
          &:last-child {
            td {
              border-bottom: none;
            }
          }
        }
      }
      &.first-column-sticky {
        th:first-child, td:first-child {
          position: sticky;
          position: -webkit-sticky;
          left: 0;
        }
      }
      &.last-column-sticky {
        th:last-child, td:last-child {
          position: sticky;
          position: -webkit-sticky;
          right: 0;
        }
      }
    }
  }
</style>

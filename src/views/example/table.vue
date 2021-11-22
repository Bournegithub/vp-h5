<template>
  <div class="example-table-page">
    <NavBar />
    <div class="table-content">
      <div class="content-wrap">
        <div
          class="table-height"
        >
          <Table
            :headData="tableHead1"
            :bodyData="tableData1"
            @setOrder="setOrder"
          />
        </div>
        <div
          class="table-height"
        >
          <Table
            :headData="tableHead2"
            :bodyData="tableData2"
            first-column-sticky
            last-column-sticky
            @setOrder="setOrder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from 'vue';
import { exampleColumns1, exampleColumns2 } from '@columns/example.js';
import NavBar from '@components/NavBar.vue';
import Table from '@components/Table.vue';

export default {
  setup() {
    const tableHead1 = exampleColumns1;
    const tableHead2 = exampleColumns2;
    const tableOrder = ref(null);
    // 数组响应式的第一种写法 ref
    const tableData1 = ref([]);
    // 第二种写法 使用push
    const tableData2 = reactive([])
    const initData = () => {
      console.log('initdata');
      const list = [];
      for (let i = 0; i < 10; i += 1) {
        const obj = {
          name: `name-${i + 1}`,
          area: `area-${i + 1}`,
          age: `age-${i + 1}`,
          sex: `sex-${i + 1}`,
          example: `example-${i + 1}`,
        };
        list.push(obj);
        tableData2.push(obj);
      }
      tableData1.value = list;
    };
    const setOrder = (val) => {
      tableOrder.value = val;
    };
    onMounted (() => {
      initData();
    });
    return {
      tableHead1,
      tableHead2,
      tableData1,
      tableData2,
      tableOrder,
      setOrder,
    };
  },
  components: {
    NavBar,
    Table,
  }
}
</script>

<style lang="less" scoped>
  .example-table-page {
    height: 100%;
    .table-content {
      height: calc(~"100% - 132px");
      .table-height {
        overflow: hidden;
        height: calc(~"50% - 4px");
        &:last-child {
          margin-top: 8px;
        }
      }
    }
  }
</style>
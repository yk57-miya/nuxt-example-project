<template>
  <div class="page">
    sample component lists
    <div class="mt-10">
      <p class="text-2xl font-bold">・accordion component</p>
      <div>
        <Accordion
          :data="AccordionLists"
          :is-opened="isOpened"
          @click="handleToggle"/>
      </div>
    </div>
    <div class="mt-10">
      <p class="text-2xl font-bold">・TODOリスト</p>
      <div>
      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DONE</th>
        </tr>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td v-if="todo.done">✔</td>
          <td v-else></td>
        </tr>
      </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Accordion from '@/components/Accordion.vue'
import { TodoStore } from '@/store'

export default Vue.extend({
  async asyncData({ error }) {
    console.log(123,TodoStore.fetchTodos());
    await TodoStore.fetchTodos()
    // try {
    //   await TodoStore.fetchTodos()
    // } catch (e) {
    //   console.log(13,e)
    //   error({
    //     // statusCode: e.response.status,
    //     // message: e.response.message
    //   })
    // }
  },
  components: { Accordion },
  data() {
    const AccordionLists = [
      {
        id: 1,
        title: 'リスト1',
        contents: {
          item01: {
            title: 'アイテム1_1',
            content: 'コンテンツ1_1'
          },
          item02: {
            title: 'アイテム1_2',
            content: 'コンテンツ1_2'
          }
        }
      },
      {
        id: 2,
        title: 'リスト2',
        contents: {
          item01: {
            title: 'アイテム2_1',
            content: 'コンテンツ2_1'
          },
          item02: {
            title: 'アイテム2_2',
            content: 'コンテンツ2_2'
          },
          item03: {
            title: 'アイテム2_3',
            content: 'コンテンツ2_3'
          }
        }
      },
      {
        id: 3,
        title: 'リスト3',
        contents: {
          item01: {
            title: 'アイテム3_1',
            content: 'コンテンツ3_1'
          },
          item02: {
            title: 'アイテム3_2',
            content: 'コンテンツ3_2'
          }
        }
      }
    ];
    return {
      AccordionLists,
      isOpened: [] as boolean[],
    }
  },
  created() {
    this.isOpened = Array(this.AccordionLists.length).fill(false);
  },
  computed: {
    todos() {
      return TodoStore.getTodos
    }
  },
  methods: {
    handleToggle(i: any) {
      if (!this.isOpened[i]) {
        this.isOpened = Array(this.AccordionLists.length).fill(false);
      }
      this.isOpened.splice(i, 1, !this.isOpened[i]);
    },
  }
})
</script>

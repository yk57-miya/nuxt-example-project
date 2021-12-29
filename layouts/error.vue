<template>
  <div class="page text-center text-black py-16">
    <p class="text-lg">
      システムエラーが発生しました。<br />
      お手数ですが、再度時間を空けてアクセスしてください。
    </p>

    <div class="mt-16 w-60 mx-auto">
      <Button label="戻る" @click="handleBack" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    handleBack() {
      location.href = '/';
    }
  }
});
</script>

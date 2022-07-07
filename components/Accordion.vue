<template>
  <div>
    <ul>
      <template v-for="(item, i) in data" class="">
        <li :key="item.title">
          <button
            class="click-item w-full inline-block text-left"
            :class="{ 'is-active': isOpened[i] }"
            @click="$emit('click', i)"
          >
            <div
              class="
                py-10
                pl-6
                accordion-title
                border-t border-solid border-black
                text-3xl
                font-bold
                bg-gray
              "
              :class="{ 'accordion-top-border': isOpened[i] }"
            >
              {{ item.title }}
            </div>
          </button>
          <Transition
            name="accordion-contents"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          >
            <dl
              v-show="isOpened[i]"
              class="
                accordion-contents
                w-full
                flex flex-wrap
                justify-start
                item-start
              "
            >
              <template v-for="(contents, j, index) in item.contents">
                <dt
                  :key="j"
                  class="
                    accordion-items-title
                    w-1/3
                    md:w-1/5
                    p-8
                    text-sm
                    leading-loose
                  "
                  :class="[index === 0 ? 'bg-gray-lighten' : 'bg-white']"
                >
                  {{ contents.title }}
                </dt>
                <dd
                  :key="contents.content"
                  class="
                    accordion-items-content
                    w-2/3
                    md:w-4/5
                    p-8
                    text-sm
                    leading-loose
                  "
                  :class="[index === 0 ? 'bg-gray-lighten' : 'bg-white']"
                  v-html="$filters.nl2br(contents.content)"
                ></dd>
              </template>
              <div class="w-full mt-10 mb-16 text-center">
                <Button
                  v-if="item.isAccess"
                  label="ENTRY"
                  size="sm"
                  @click="handleButton"
                />
              </div>
            </dl>
          </Transition>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line
import Vue, { PropType } from 'vue';
import { Accordion } from '@/types/interface';

export default Vue.extend({
  props: {
    data: {
      type: Array as PropType<Accordion[]>,
      default: null
    },
    isOpened: {
      type: Array as PropType<string[]>,
      default: null
    }
  },
  methods: {
    beforeEnter(element: any) {
      element.style.height = '0';
    },
    enter(element: any) {
      element.style.height = element.scrollHeight + 'px';
    },
    beforeLeave(element: any) {
      element.style.height = element.scrollHeight + 'px';
    },
    leave(element: any) {
      element.style.height = '0';
    },
  }
});
</script>

<style lang="scss" scoped>
.accordion-contents {
  transition: height 500ms ease-in-out;
  overflow: hidden;
}
.accordion-contents-enter-active {
  animation-duration: 500ms;
  animation-fill-mode: both;
}
.accordion-contents-leave-active {
  animation-duration: 500ms;
  animation-fill-mode: both;
}
.click-item {
  position: relative;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 15px;
    height: 2px;
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 22px;
  }
  &::before {
    transform: translate(0, -50%);
  }
  &::after {
    transition: all 0.3s ease-in-out;
    transform: translate(0, -50%) rotate(90deg);
  }
  &.is-active {
    &::after {
      transform: translate(0, -50%) rotate(180deg);
    }
  }
  &:focus {
    outline: none;
  }
}
</style>

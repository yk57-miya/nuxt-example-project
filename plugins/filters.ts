import Vue from 'vue';

export const nl2br = (text: string): string => {
  if (!text) {
    return '';
  }
  text = text.replace(/\r\n/g, '<br>');
  text = text.replace(/(\n|\r)/g, '<br>');
  return text;
};

Vue.prototype.$filters = {
  nl2br
};

<template>
  <pre>{{ xmlContent }}</pre>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      xmlContent: '',
    };
  },
  mounted() {
    this.loadXML();
  },
  methods: {
    async loadXML() {
      try {
        const response = await fetch('/sitemap.xml');
        const xmlData = await response.text();
        this.xmlContent = xmlData;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
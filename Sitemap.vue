<template>
  <pre>{{ xmlContent }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sitemap from './sitemap.xml'
import axios from 'axios';
const xmlContent = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('/sitemap.xml');
    xmlContent.value = response.data;
    console.log(xmlContent.value);
  } catch (error) {
    console.error(error);
  }
});
</script>
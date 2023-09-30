<script setup lang="ts">
import AvaandmedBaseService from '../service/base/avaandmedBaseService';
const avaandmedService = new AvaandmedBaseService();

avaandmedService.getDatasetFileContentAsync('d43cbb24-f58f-4928-b7ed-1fcec2ef355b', 'df41ee16-c00b-4525-8c5f-50e256b8670f');

</script>

<template>
<div>
    <span>Hello World!</span>
</div>
</template>

<style scoped>

</style>
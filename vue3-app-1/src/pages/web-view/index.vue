<template>
    <div>
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import Header from './component/header.vue'
import Footer from './component/footer.vue'
</script>
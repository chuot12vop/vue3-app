<template>
    <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
        thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">
        <swiper-slide v-for="(image, key) in list_images" :key="carouselKey">
            <img :src="image" alt=""/>
        </swiper-slide>
    </swiper-container>
    <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
        watch-slides-progress="true">
        <swiper-slide v-for="(image, key) in list_images" :key="carouselKey">
            <img :src="image" alt=""/>
        </swiper-slide>        
    </swiper-container>
</template>
<script>
    import 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js'
    export default {
        props:['list_images','carouselKey']
    }
</script>
<style scoped>
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

swiper-container {
    width: 100%;
    height: 100%;
}

swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper {
    height: 80%;
    width: 100%;
}

.mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper2 swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
}

swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

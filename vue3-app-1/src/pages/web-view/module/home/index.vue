<template>
    <div>
        <swiper :list_images="list_images"/>
        <!-- <GoogleMap/> -->
    </div>
</template>
<script>
import swiper from '@/components/module/swiper.vue';
import GoogleMap from '../../../../components/module/GoogleMap.vue';
import './home.css'
export default {
    components:{
        swiper,
        GoogleMap
    },
    data(){
        return{
            list_images:[
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-2.jpg",
                "https://swiperjs.com/demos/images/nature-3.jpg",
                "https://swiperjs.com/demos/images/nature-4.jpg",
                "https://swiperjs.com/demos/images/nature-5.jpg",
                "https://swiperjs.com/demos/images/nature-6.jpg",
                "https://swiperjs.com/demos/images/nature-7.jpg",
                "https://swiperjs.com/demos/images/nature-8.jpg",
                "https://swiperjs.com/demos/images/nature-10.jpg",
            ]
        }
    }
}
</script>
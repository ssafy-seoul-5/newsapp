<template>
    <div>
        <h2 style="margin-left: 100px; font-size: 30px; color: darkolivegreen">{{ routeName }}</h2>
        <br>
        <ArticleList :category="routeName"/>        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, watch, ref } from 'vue';
import ArticleList from '@/components/article/ArticleList.vue';
import { useArticleStore } from '../stores/articleStore';

const store = useArticleStore();
const route = useRoute();
const routeName = ref('')

// 뷰에 표시할 routeName에 카테고리 반영
onMounted(()=>{
    routeName.value = route.params.category;
    store.getArticleListByCategory(routeName.value);
})

// 카테고리 nav 누를 때마다 지속적으로 변화 감지하도록 watch 작성
watch(route, (newVal)=>{
    routeName.value = newVal.params.category;
})
</script>

<style scoped>

</style> 
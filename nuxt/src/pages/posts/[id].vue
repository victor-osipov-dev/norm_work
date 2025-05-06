<template>
    <div class="container mx-auto mb-4">
        <PagePost v-if="post" :post="post"></PagePost>
    </div>

    <div class="container mx-auto">
        <div class="feedback-panel mb-8">
            <div class="flex gap-2 items-center">
                <h2 class="text-theme mb-2 text-2xl">Отзывы</h2>
                <Icon @click="openCommentArea" class="bg-yellow-400 cursor-pointer mb-1" size="1.2rem" name="streamline:add-square-solid"/>
            </div>

            <template v-if="show_comment_area"> 
                <Icon  @click="closeCommentArea" class="bg-red-600 cursor-pointer mb-1 self-center justify-self-end" size="1.2rem" name="streamline:delete-1-solid"/>

                <FloatLabel class="mb-2 col-span-2" variant="in">
                    <Textarea ref="comment_panel_el" v-model="comment_area_model" autoResize rows="2" cols="45"/>
                    <label for="in_label">Текст комментария</label>
                </FloatLabel>

                <Rating v-model="estimation">
                    <template #onicon>
                        <Icon class="bg-yellow-400" name="streamline:star-1-solid"/>
                    </template>
                    <template #officon>
                        <Icon class="text-gray-600" name="streamline:star-1"/>
                    </template>
                </Rating>

                <AppButton @click="sendFeedback">Отправить</AppButton>
            </template>
            
        </div>
        

        <div class="feedbacks flex flex-col gap-4">
            <Feedback v-for="feedback in feedback_store.feedbacks" :feedback :key="feedback.user.id"></Feedback>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFeedbackStore } from '~/src/entities/feedback/feedback_store'
import { usePostStore } from '~/src/entities/post/post_store'
import type { IPost } from '~/src/entities/post/post_types'
import { useUserStore } from '~/src/entities/user/user_store'
import type { Categories, PostsByCategory } from '~/src/shared/types'

definePageMeta({
    name: 'post'
})
const xsrf_token = useCookie('XSRF-TOKEN')
const route = useRoute()
const user_store = useUserStore()
const post_store = usePostStore()
const feedback_store = useFeedbackStore()
const show_comment_area = ref(false)
const comment_area_el = useTemplateRef('comment_panel_el')
const comment_area_model = ref('')
const estimation = ref(0)
const localePath = useLocalePath()



function sendFeedback() {
    if (post.value?.id && estimation.value !== 0 && comment_area_model.value) {
        console.log('sendFeedback');
        
        $fetch<unknown, any, any>('http://localhost:8000/posts/feedback/' + post.value.id, { body: {
            'text': comment_area_model.value,
            'estimation': estimation.value,
        }, credentials: 'include', method: 'POST', headers: {'X-XSRF-TOKEN': xsrf_token.value}})
        .then((res) => {
            closeCommentArea()
            // navigateTo(locale_path({name: 'profile'}));
        })
    }
}

function openCommentArea() {
    if (user_store.is_login) {
        show_comment_area.value = true
        // @ts-ignore
        nextTick(() => comment_area_el.value.$el.focus())
    } else {
        navigateTo(localePath({name: 'signin'}))
    }
}

function closeCommentArea() {
    show_comment_area.value = false
    estimation.value = 0
    comment_area_model.value = ''

}

const post = computed(() => {
    return (Object.keys(post_store.posts_by_category ?? {}) as Categories[]).reduce((acc: IPost[], value: Categories): IPost[] => {
        return post_store.posts_by_category?.[value] ? [
            ...acc,
            ...post_store.posts_by_category[value]
        ] : acc;
    }, [])
    .find((post: IPost) => post.id == Number(route.params.id))
})
// // console.log(123);
// watch(() => post.value?.id, () => {
//     console.log(123);
    
//     if (post.value?.id) {
//         console.log('fetchFeedbacks');
        
//         feedback_store.fetchFeedbacks(post.value.id)
//         // stop()
//     }
// }, {deep: true})


watchEffect(() => {
    if (post.value?.id) {
        console.log('fetchFeedbacks');
        
        feedback_store.fetchFeedbacks(post.value.id)
        // stop()
    }
})

</script>

<style scoped>
.feedback-panel {
    display: grid;
    grid-template-columns: auto auto;
    width: max-content;
}
/* .feedback-panel__float-label {
    grid
} */
</style>
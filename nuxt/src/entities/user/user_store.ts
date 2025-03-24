import type { IUser } from "./user_types"

export const useUserStore = defineStore('user', () => {
    const is_login = computed(() => user.value ? true : false)
    const token = useCookie('XSRF-TOKEN')

    // const { data: user, execute } = useAsyncData(async () => {
    //     await $fetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })

    //     return $fetch<unknown, any, any>('http://localhost:8000/user/profile', {
    //         credentials: 'include', 
    //         headers: {
    //             'X-XSRF-TOKEN': token.value
    //         }
    //     })
    // })

    const user = ref<IUser | null>(null)

    async function fetchUser() {
        // await $fetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })

        const res = await $fetch<unknown, any, any>('http://localhost:8000/user/profile', {
            credentials: 'include', 
            headers: {
                'X-XSRF-TOKEN': token.value
            }
        })
        
        user.value = res;
    }


    function logout() {
        user.value = null;
        token.value = null;
    }


    return {
        is_login,
        user,
        fetchUser,
        logout
    }
})
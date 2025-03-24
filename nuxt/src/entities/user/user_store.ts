import type { IUser } from "./user_types"

export const useUserStore = defineStore('user', () => {
    const is_login = computed(() => user.value ? true : false)
    const xsrf_token = useCookie('XSRF-TOKEN')

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

    async function fetchUser(driver_type?: string, token?: string) {

        // await $fetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
        // $fetch<unknown, any, any>('http://localhost:8000/test', {credentials: 'include'}).then((res) => {
        //     console.log(res);
            
        // })
        if (driver_type && token) {
            await $fetch('http://localhost:8000/auth/callback/' + driver_type + '?token=' + token, { credentials: 'include' })
        }


        const res = await $fetch<unknown, any, any>('http://localhost:8000/user/profile', {
            credentials: 'include', 
            headers: {
                'X-XSRF-TOKEN': xsrf_token.value
            }
        })
        
        user.value = res;
    }


    function logout() {
        user.value = null;
        xsrf_token.value = null;
    }


    return {
        is_login,
        user,
        fetchUser,
        logout
    }
})
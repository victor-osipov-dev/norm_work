import type { IUser } from "./user_types"

export const useUserStore = defineStore('user', () => {
    const is_login = computed(() => user.value ? true : false)
    const { data: user } = useFetch<IUser>('http://localhost:8000/user/profile', { 
        headers: useRequestHeaders(), 
        server: true, 
        lazy: false,
        immediate: true
    
    })

    function logout() {
        user.value = null;
    }

    return {
        is_login,
        user,
        // fetchUser,
        logout
    }
})
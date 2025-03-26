import type { IUser } from "./user_types"

export const useUserStore = defineStore('user', () => {
    const is_login = computed(() => user.value ? true : false)
    const { data: user, execute: fetchUser } = useFetch<IUser>('http://localhost:8000/user/profile', { headers: useRequestHeaders(['cookie']) })

    function logout() {
        user.value = null;
    }

    return {
        is_login,
        user,
        fetchUser,
        logout
    }
})
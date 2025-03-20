export const useUserStore = defineStore('user', () => {
    const is_login = useLocalStorage('is_login', false)

    const { data: user } = useFetch('http://localhost:8000/user/profile/1')

    return {
        is_login,
        user
    }
})

import useAlertNotification from '../services/notification'
const { successSweetAlert } = useAlertNotification()
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
    }),
    persist: {
        paths: ['user']
    },
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        async login(formData) {
            try {
                const response = await $fetch("http://127.0.0.1:8000/api/login", {
                    method: "POST",
                    body: { ...formData },
                });
                successSweetAlert('Notification', 'Successful authentication')

                this.commonSetter(response)
            } catch (error) {
                throw error;
            }
        },

        async register(formData) {
            try {
               await $fetch("http://127.0.0.1:8000/api/register", {
                    method: "POST",
                    body: { ...formData },
                });
                return navigateTo("/login");
            } catch (error) {
                throw error;
            }
        },

        async logout() {
            const tokenStore = useTokenStore();
            try {
               await $fetch("http://127.0.0.1:8000/api/logout", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${tokenStore.getToken}`
                    }
                });
                tokenStore.removeToken()
            } catch (error) {
                tokenStore.removeToken()
                throw error;
            }
        },

        commonSetter(data) {
            const tokenStore = useTokenStore();
            tokenStore.setToken(data.access);
            this.user = {
                username: data.user.username,
                email: data.user.email,
                bank: data.user.bank,
                acc: data.user.acc,
                id: data.user.id,
                is_superuser: data.user.is_superuser,
            };
            return navigateTo("/dashboard");
        }
    },
})
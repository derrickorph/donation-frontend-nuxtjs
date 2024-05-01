export const useTokenStore = defineStore("token", {
    state: () => ({
        token: null,
        loggedIn: false
    }),
    persist: true,
    getters: {
        getToken: (state) => state.token,
        getStatus: (state) => state.loggedIn,
    },
    actions: {
        setToken(token) {
            this.token = token;
            this.loggedIn = true
        },

        removeToken() {
            const auth = useAuthStore()
            auth.$reset(); // Je reset les donnees persister par le useAuthStore notamment a travers la variable user
            this.$reset(); // Je reset les donnees persister par le useTokenStore a travers les variables token et loggedIn
            return navigateTo("/login"); //Redirection page login
        },
    },
});

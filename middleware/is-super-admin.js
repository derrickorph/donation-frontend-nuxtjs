export default defineNuxtRouteMiddleware((to, from) => {
    const tokenStore = useTokenStore();
    const auth = useAuthStore();

    if (!tokenStore.getStatus) return navigateTo("/login");
    if (!auth.getUser.is_superuser) return abortNavigation()
})
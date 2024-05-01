
<template>
    <div>
        <SiteHeader />
        <main>
            <slot />
        </main>
        <SiteFooter />

    </div>
</template>

<script setup>
onMounted(() => {
    if (localStorage.theme) document.documentElement.setAttribute("data-theme", localStorage.theme);

})
</script>
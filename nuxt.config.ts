// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  app: {
    head: {
      title: "Donation | ",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "FRESH PROJECT" }, { name: "format-detection", content: "telephone-no" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/assets/images/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "/assets/fonts/feather/feather.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/libs/bootstrap-icons/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/libs/@mdi/font/css/materialdesignicons.min.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/libs/simplebar/dist/simplebar.min.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/libs/tiny-slider/dist/tiny-slider.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/css/theme.min.css",
        },
      ],
      script: [
        {
          src: "/assets/libs/jquery/dist/jquery.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/libs/simplebar/dist/simplebar.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/libs/tiny-slider/dist/min/tiny-slider.js",
          type: "text/javascript",
        },
        {
          src: "/assets/js/theme.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/libs/@popperjs/core/dist/umd/popper.min.js",
          type: "text/javascript",
        },

        {
          src: "/assets/libs/tippy.js/dist/tippy-bundle.umd.min.js",
          type: "text/javascript",
        },
        {
          src: "/assets/js/vendors/tnsSlider.js",
          type: "text/javascript",
        },
        {
          src: "/assets/js/vendors/tooltip.js",
          type: "text/javascript",
        },
      ],
    },
  },
});

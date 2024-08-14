// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	app: {
		baseURL: "/kvseagent/",
		buildAssetsDir:'/kvseagent/_nuxt/',
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
	nitro: {
		runtimeConfig: {
			app: {
				baseURL: "/kvseagent/",
				buildAssetsDir: "_nuxt",
			},
		},
	},

	devtools: { enabled: true },

	css: ["~/assets/scss/app.scss"],

	modules: ["@nuxt/ui"],

	vite: {
		css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "~/assets/scss/_colors.scss" as *;',
			},
		},
		},
	},
});

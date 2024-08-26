export default defineAppConfig({
	ui: {
		primary: "orange",
		gray: "cool",

		select: {
			height: "max-h-full",
			
			default: {
				loadingIcon: "i-octicon-sync-24",
				trailingIcon: "i-octicon-chevron-down-24",
			},
		},
		selectMenu: {
			height: "max-h-full",
			default: {
				selectedIcon: "material-symbols:fitbit-check-small",
			},
		},
	},
});

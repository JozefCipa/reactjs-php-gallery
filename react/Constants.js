const Constants = {

	ACTIONS: {
		LOAD_MORE          : "load-more",
		CHANGE_MAIN_PICTURE: "change-main-picture",
		UPLOAD_PICTURE     : "upload-picture",
		LOAD_CATEGORY      : "load-category",
		INIT_STORE         : "init-store"
	},

	RESOURCES: {
		LEFT_ARROW : "./dist/icons/previous.png",
		RIGHT_ARROW: "./dist/icons/next.png",
		MENU_ICON  : "./dist/icons/menu.png",
		CLOSE_ICON : "./dist/icons/close.png",
		RSS_ICON   : "./dist/icons/rss_logo.png",
		LOADER     : "./dist/icons/splash_screen_loader.gif"
	},

	OPTIONS: {
		THUMBS_COUNT: 5
	},

	API: {
		GET_CATEGORY    : "http://localhost:8080/bart.sk.fotogaleria/api/pictures-category/", // /:picturesCategory
		GET_MORE_THUMBS : "http://localhost:8080/bart.sk.fotogaleria/api/thumbs/", // /:picturesCategory/:count
		GET_MAIN_PICTURE: "http://localhost:8080/bart.sk.fotogaleria/api/main-picture/", //:thumb
		UPLOAD          : "http://localhost:8080/bart.sk.fotogaleria/api/upload/",
		GET_CATEGORIES  : "http://localhost:8080/bart.sk.fotogaleria/api/load-categories/"
	},

	NEXT_PICTURE    : "next-image",
	PREVIOUS_PICTURE: "previous-image",
	CHANGE_EVENT    : "change"
};

export default Constants;

// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/en" | "/en/wiki" | "/en/wiki/[slug]" | "/wiki" | "/wiki/[slug]" | "/[lang]";
		RouteParams(): {
			"/en/wiki/[slug]": { slug: string };
			"/wiki/[slug]": { slug: string };
			"/[lang]": { lang: string }
		};
		LayoutParams(): {
			"/": { slug?: string; lang?: string };
			"/en": { slug?: string };
			"/en/wiki": { slug?: string };
			"/en/wiki/[slug]": { slug: string };
			"/wiki": { slug?: string };
			"/wiki/[slug]": { slug: string };
			"/[lang]": { lang: string }
		};
		Pathname(): "/" | "/en" | "/en/" | "/en/wiki" | "/en/wiki/" | `/en/wiki/${string}` & {} | `/en/wiki/${string}/` & {} | "/wiki" | "/wiki/" | `/wiki/${string}` & {} | `/wiki/${string}/` & {} | `/${string}` & {} | `/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/CNAME" | "/content/sitemap.json" | "/sitemap.json" | string & {};
	}
}
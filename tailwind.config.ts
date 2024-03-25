import type {Config} from 'tailwindcss';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'container-text': 'minmax(24px, 1fr) minmax(auto, 768px) minmax(24px, 1fr)',
				'container-normal': 'minmax(24px, 1fr) minmax(auto, 1280px) minmax(24px, 1fr)',
				'container-full': 'minmax(24px, 1fr) minmax(auto, 100%) minmax(24px, 1fr)',
			},
		},
	},
	plugins: [],
};
export default config;

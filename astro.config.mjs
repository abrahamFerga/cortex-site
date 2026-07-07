// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cortex-platform.example',
	integrations: [
		starlight({
			title: 'Cortex',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/abrahamFerga/Cortex' }],
			// Product docs are markdown-first and belong to each product's own repo; CI pulls
			// them into src/content/docs/docs/<product>/ at build time (self-contained for now).
			sidebar: [
				{
					label: 'The Lawyer',
					items: [{ autogenerate: { directory: 'docs/the-lawyer' } }],
				},
			],
		}),
	],
});

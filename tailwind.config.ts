import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'pretendard-bold': [
  				'pretendard-bold'
  			],
  			'pretendard-semiBold': [
  				'pretendard-semiBold'
  			],
  			'pretendard-regular': [
  				'pretendard-regular'
  			],
  			'pretendard-extraBold': [
  				'pretendard-extraBold'
  			]
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			borderGray: '#d1d5db',
  			'main-color': '#6E58F6',
  			'main-color-hover': '#5A45E0',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderWidth: {
  			custom: '1px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".custom-checkbox": {
          "@apply appearance-none w-6 h-6 border-custom border-borderGray rounded-lg cursor-pointer relative":
            {},
          "&:checked": {
            "@apply bg-black border-0": {},
          },
          "&:checked::before": {
            content: '""',
            '@apply absolute inset-0 bg-[url("/icons/checked.png")] bg-no-repeat bg-center':
              {},
          },
          "&:not(:checked)": {
            "@apply bg-white": {},
          },
          "&::before": {
            content: '""',
            "@apply absolute inset-0": {},
          },
        },
      });
    },
      require("tailwindcss-animate")
],
};

export default config;

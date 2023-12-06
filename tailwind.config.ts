import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern-mobile': 'url(../../public/images/pattern-bg-mobile.png)',
        'pattern-desktop': 'url(../../public/images/pattern-bg-desktop.png)',
      },
      screens: {
        small: '375px',
      },
    },
  },
  plugins: [],
};
export default config;

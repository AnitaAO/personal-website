module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    screens: {
      'sm': {'min': '320px'},
      // => @media (min-width: 1536px) { ... }

      'md': {'min': '641px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      // 'lg': {'min': '998px', 'max': '1535px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    colors: {
      //light theme colors

      lightTheme:{
        'primary': '#2577c1',
        'secondary-bg': '#fff',
        'light': '#fff',
        'header-color': '#c23fe2',
        'route-link-active': '#fff',
        'link-color': '#555050',
        'border-color': '#555050',
      },

      // Dark theme colors
      darkTheme: {
        'dark-primary': '#ff500b',
        'dark-secondary-bg': '#424242',
        'dark-theme': '#424242',
        'dark-header-color': '#424242',
        'dark-route-link-active': '#ff500b',
        'dark-link-color': '#fff',
        'dark-border-color': '#1cd61c',
      }

    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};

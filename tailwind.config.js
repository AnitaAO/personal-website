module.exports = {
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
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
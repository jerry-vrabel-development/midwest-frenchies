module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // adjust paths to your project
  ],
  theme: {
    darkMode: 'class',
      extend: {
        colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
        },
      },
  },
  plugins: [],
};

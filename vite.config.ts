
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import { viteSingleFile } from "vite-plugin-singlefile";
  import path from 'path';

  export default defineConfig({
    plugins: [react(), viteSingleFile({
    inlinePattern: ['**/*.js', '**/*.css'], // what files to inline
    removeViteModuleLoader: true,
    useRecommendedBuildConfig: true,
    minifyHTML: true,
  })],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: "./", // This is the key setting for standalone HTML
    build: {
      target: "esnext",
      assetsInlineLimit: 100000000,
      chunkSizeWarningLimit: 100000000,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined, // Disable code splitting for single file
        },
      },
      minify: 'terser',
    },
    server: {
      port: 3000,
      open: true,
    },
  });
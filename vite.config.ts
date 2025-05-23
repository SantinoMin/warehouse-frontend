import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(
          new URL('./src/components', import.meta.url)
      ),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@recoil': fileURLToPath(new URL('./src/recoil', import.meta.url)),
      '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 전역 SCSS 파일 추가 (main.scss에서 전역 scss설정되어 있어서, 추가로 scss 설정 안 해도 됨)
        additionalData: `
          @use "@/assets/styles/main.scss" as *;
        `,
        // api: 'modern-compiler'
        silenceDeprecations: ["legacy-js-api"]
      },
    },
  },
});

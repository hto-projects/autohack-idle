import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log("backend url url: " + env.BACKEND_URL);

  return {
    plugins: [react()],
    server: {
      port: 5000,
      proxy: {
        '/api': {
          target: env.BACKEND_URL,
          changeOrigin: true,
        },
      },
    },
  }
});

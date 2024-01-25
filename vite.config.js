import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite'

// export default {
//   plugins: [reactRefresh()],
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: '/home/'
})
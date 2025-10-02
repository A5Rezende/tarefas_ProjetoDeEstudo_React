import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/tarefas_ProjetoDeEstudo_React/' // Exclusivo para o github pages
})

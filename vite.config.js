import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: '/TemplateEscola/', // 👈 ADICIONE ESTA LINHA COM O NOME DO REPOSITÓRIO
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import daisyui from 'daisyui';
import themes from 'daisyui/theme/object';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  daisyui:{
    themes:[
      {
                mytheme: {
                  "primary": "#570df8",
                  "secondary": "#f000b8",
                  "accent": "#37cdbe",
                  "neutral": "#3d4451",
                  "base-100": "#ffffff", // Set the base background to white
                },
      }
    ]
  }

})

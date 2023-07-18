import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './App.tsx'

import { store } from '@/app/store.ts'
import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

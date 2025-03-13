import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/style.scss";
import MarvelService from './services/MarvelService';
import App from './components/app/App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import AppRoutes from './AppRoutes.tsx';
import Auth0ProviderNavigate from './auth/Auth0ProviderNavigate.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderNavigate>
        <AppRoutes />
      </Auth0ProviderNavigate>
    </BrowserRouter>
  </StrictMode>,
)

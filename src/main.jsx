import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a61bc1680906cbe36eff5b47904306a6@o4509537521631232.ingest.de.sentry.io/4509537530544208",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

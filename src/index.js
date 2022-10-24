
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import "./font/font.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <App></App>
  </QueryClientProvider>
);


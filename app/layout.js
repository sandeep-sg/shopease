"use client";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { store } from "./store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

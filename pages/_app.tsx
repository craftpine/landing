import ErrorFallback from "@/components/pageViews/ErrorFallback";
import "@/styles/globals.css";
import { AppPropsWithTemplate } from "@/types";
import { ThemeProvider } from "next-themes";
import { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppPropsWithTemplate) {
  const getTemplate = Component.getTemplate ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider attribute="class">
      <ErrorBoundary fallbackRender={ErrorFallback}>
        {getTemplate(<Component {...pageProps} />)}
        <ToastContainer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

// import ModalRoot from "@/components/_gadgets/ModalRoot";
import ErrorFallback from "@/components/pageViews/ErrorFallback";
import "@/styles/globals.css";
import { AppPropsWithTemplate } from "@/types";
import { ThemeProvider } from "next-themes";
import { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function App({ Component, pageProps }: AppPropsWithTemplate) {
  const getTemplate = Component.getTemplate ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider attribute="class">
      <ErrorBoundary fallbackRender={ErrorFallback}>
        {getTemplate(<Component {...pageProps} />)}
        {/* <ModalRoot /> */}
      </ErrorBoundary>
    </ThemeProvider>
  );
}

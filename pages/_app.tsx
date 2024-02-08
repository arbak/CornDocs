import { CommandProvider } from "#/context/commandContext";
import { DarkmodeProvider } from "#/context/darkmodeContext";
import { SidebarProvider } from "#/context/sidebarContext";
import "#/styles/globals.css";
import "#/styles/prism.css";
import "#/styles/progress.css";
import Layout from "#/ui/layout/Layout";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";

const font = IBM_Plex_Mono({ 
  subsets: ["latin"], 
  weight: "100", // Specify the weight of the font (e.g., normal)
  style: "normal" // Specify the style of the font (e.g., normal)
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandProvider>
        <SidebarProvider>
          <DarkmodeProvider>
            <Layout font={font.className}>
              <Component {...pageProps} />
            </Layout>
          </DarkmodeProvider>
        </SidebarProvider>
      </CommandProvider>
    </>
  );
}

export default MyApp;

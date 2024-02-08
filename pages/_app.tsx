import { CommandProvider } from "#/context/commandContext";
import { DarkmodeProvider } from "#/context/darkmodeContext";
import { SidebarProvider } from "#/context/sidebarContext";
import "#/styles/globals.css";
import "#/styles/prism.css";
import "#/styles/progress.css";
import Layout from "#/ui/layout/Layout";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";

const font = Inconsolata({ 
  subsets: ["latin"], 
  weight: "400", // Specify the weight of the font (e.g., normal)
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

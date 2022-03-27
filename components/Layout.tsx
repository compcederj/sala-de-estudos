import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { IModule } from "../types/page";
interface Props {
  content: IModule[];
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { content, children } = props;

  return (
    <>
      <Head>
        <title>Sala de estudos</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {},
        }}
      >
        <AppShell
          fixed
          navbar={<Navbar content={content} />}
          header={<Header />}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </>
  );
}

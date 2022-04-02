import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { IModule } from "../types/page";
import { useState } from "react";
interface Props {
  content: IModule[];
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { content, children } = props;

  const [opened, setOpened] = useState(true);

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
          navbar={<Navbar opened={opened} content={content} />}
          header={
            <Header opened={opened} changeOpened={() => setOpened(!opened)} />
          }
          navbarOffsetBreakpoint="sm"
        >
          {children}
        </AppShell>
      </MantineProvider>
    </>
  );
}

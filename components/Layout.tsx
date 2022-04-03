import Head from "next/head";
import { AppShell, MantineProvider } from "@mantine/core";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { IModule } from "../types/page";
import { useLayoutEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  content: IModule[];
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { content, children } = props;
  const isMobile = useMediaQuery("(max-width: 769px)");

  useLayoutEffect(() => {
    setIsNavbarOpened(false);
  }, [isMobile]);

  const [isNavbarOpened, setIsNavbarOpened] = useState(true);

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
          navbar={
            <Navbar
              isNavbarOpened={isNavbarOpened}
              content={content}
              onChangeNavbarOpened={() => setIsNavbarOpened(!isNavbarOpened)}
            />
          }
          header={
            <Header
              isNavbarOpened={isNavbarOpened}
              onChangeNavbarOpened={() => setIsNavbarOpened(!isNavbarOpened)}
            />
          }
          navbarOffsetBreakpoint="sm"
        >
          {children}
        </AppShell>
      </MantineProvider>
    </>
  );
}

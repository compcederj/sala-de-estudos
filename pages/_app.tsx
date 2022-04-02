import Head from "next/head";
import { Button } from "@mantine/core";
import Layout from "../components/Layout";
import fetchedNavbarContent from "../content/pageList.json";
import "../styles/globals.css";

export default function App({ Component, navbarContent, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sala de estudos CEDERJ</title>
        <meta
          name="description"
          content="Um projeto criado por alunos para alunos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout content={fetchedNavbarContent}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

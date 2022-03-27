import Head from "next/head";
import { Button } from "@mantine/core";
import Layout from "../components/Layout";
import fetchedContent from "../content/pageList.json";

export default function Home({ content }) {
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

      <Layout content={content}>
        <Button>oepa</Button>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      content: fetchedContent,
    },
  };
}

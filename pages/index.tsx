import { NextPageWithTemplate } from "@/types";
import Head from "next/head";
import LandingPageView from "@/components/pageViews/Dashboard";
import WithNavbarTemplate from "@/components/templates/WithHeaderNavbar";

const HomePage: NextPageWithTemplate = () => {
  return (
    <>
      <Head>
        <title>Astro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LandingPageView />
    </>
  );
};

// Same as Next.js layout component.
// The name is changed from 'layout' to `template` for the sake of Atomic Design.
// SEE: https://nextjs.org/docs/basic-features/layouts
HomePage.getTemplate = (page: React.ReactElement) => {
  return (
    <WithNavbarTemplate navbarTitle="navbarTitle">{page}</WithNavbarTemplate>
  );
};

export default HomePage;

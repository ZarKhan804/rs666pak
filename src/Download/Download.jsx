
import { Helmet } from "react-helmet-async";

import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";
import Article from "./Article";

function Download() {
  return (
    <>
      <Helmet>
        <title>666RS Download Guide | Mobile Access Information</title>

        <meta
          name="description"
          content="Explore the 666RS download and mobile access guide, compatible device information, application safety, account guidance, and general gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.rs666pak.com/download"
        />

        <meta
          property="og:title"
          content="666RS Download Guide | Mobile Access Information"
        />

        <meta
          property="og:description"
          content="Learn about 666RS mobile access, application information, device compatibility, account guidance, and general gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.rs666pak.com/download"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.rs666pak.com/og-image.webp"
        />

        <meta
          name="twitter:title"
          content="666RS Download Guide | Mobile Access Information"
        />

        <meta
          name="twitter:description"
          content="Learn about 666RS mobile access, application information, device compatibility, account guidance, and general gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.rs666pak.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <DownloadHero />
        <InternalLinksArticle />
        <Article />
      </main>
    </>
  );
}

export default Download;

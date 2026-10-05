
import { Helmet } from "react-helmet-async";

import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import InternalLinksArticle from "./InternalLinksArticle";

function Blog() {
  return (
    <>
      <Helmet>
        <title>666RS Blog | Game Guides & Platform Information</title>

        <meta
          name="description"
          content="Explore 666RS guides, gameplay information, mobile access tips, account security, platform features, and responsible gaming resources for users in Pakistan."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link
          rel="canonical"
          href="https://www.rs666pak.com/blog"
        />

        <meta
          property="og:title"
          content="666RS Blog | Game Guides & Platform Information"
        />

        <meta
          property="og:description"
          content="Explore 666RS platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          property="og:url"
          content="https://www.rs666pak.com/blog"
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
          content="666RS Blog | Game Guides & Platform Information"
        />

        <meta
          name="twitter:description"
          content="Explore 666RS platform guides, mobile access information, account security tips, and responsible gaming resources."
        />

        <meta
          name="twitter:image"
          content="https://www.rs666pak.com/og-image.webp"
        />
      </Helmet>

      <main id="main-content">
        <BlogHero />
        <BlogPosts />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Blog;

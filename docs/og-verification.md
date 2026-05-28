# OG Tag Verification Checklist

Post-deployment steps to confirm Open Graph metadata is functioning correctly.

---

## 1. Verify tags in page source

Open https://ai-in-academic-libraries.vercel.app in a browser, then view source (`Ctrl+U` / `Cmd+U`). Confirm all five required tags are present with correct values:

```
<meta property="og:title" content="AI in Academic Libraries" />
<meta property="og:description" content="AI literacy curriculum for academic library workers..." />
<meta property="og:image" content="https://ai-in-academic-libraries.vercel.app/og-image.png" />
<meta property="og:url" content="https://ai-in-academic-libraries.vercel.app" />
<meta property="og:type" content="website" />
```

Also confirm Twitter card tag:

```
<meta name="twitter:card" content="summary_large_image" />
```

---

## 2. Preview across platforms

Visit https://www.opengraph.xyz/ and enter the site URL. The tool renders previews for LinkedIn, Twitter/X, Slack, Facebook, iMessage, and Discord simultaneously. Confirm the OG image and title appear in each preview.

---

## 3. Force LinkedIn cache refresh

LinkedIn caches link previews independently of the site. To clear the cached plain-text preview:

1. Visit https://www.linkedin.com/post-inspector/
2. Paste `https://ai-in-academic-libraries.vercel.app` into the URL field
3. Click **Inspect**
4. If a stale preview appears, click **Regenerate** to force a fresh fetch

After inspection, create a test post on LinkedIn with the URL to confirm the rich preview appears in the feed.

---

## 4. Document the result

Take a screenshot of the working LinkedIn or opengraph.xyz preview for portfolio documentation. The image dimensions (1200×630) and the `summary_large_image` Twitter card type ensure the image renders at full width rather than as a small thumbnail across all major platforms.

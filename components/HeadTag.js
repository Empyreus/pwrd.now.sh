import Head from "next/head"

const HeadTag = () => (
  <Head>
    <title>Secure Password Generator</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap"
      rel="stylesheet"
    />

    <link href="/static/initial.css" rel="stylesheet" />

    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="theme-color" content="#282935" />

    <title>Password Kiwi | Secure Password Generator</title>
    <meta name="title" content="Password Kiwi | Secure Password Generator" />
    <meta
      name="description"
      content="Generate strong, secure, random passwords 🔒 100% open source, and works offline."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://password.kiwi/" />
    <meta
      property="og:title"
      content="Password Kiwi | Secure Password Generator"
    />
    <meta
      property="og:description"
      content="Generate strong, secure, random passwords 🔒 100% open source, and works offline."
    />
    <meta property="og:image" content="" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://password.kiwi/" />
    <meta
      property="twitter:title"
      content="Password Kiwi | Secure Password Generator"
    />
    <meta
      property="twitter:description"
      content="Generate strong, secure, random passwords 🔒 100% open source, and works offline."
    />
    <meta property="twitter:image" content="" />
  </Head>
)

export default HeadTag
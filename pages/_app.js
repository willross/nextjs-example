import { IntlProvider } from 'react-intl'
import { messages } from "../i18n/addMessages";
import Layout from "../components/Layout";
import Router from "next/router";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let { locale } = router.query

  if (!locale) locale = "en"

  return (
    <>
      <div>
        <label htmlFor="locale-select">Change language: </label>
        <select
          value={locale}
          id="locale-select"
          onChange={(e) =>
            Router.push({ pathname: "/", query: { locale: e.target.value } })
          }
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <IntlProvider locale={locale} messages={messages}>
        <Layout key={locale}>
          <Component key={locale} {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}

export default MyApp;

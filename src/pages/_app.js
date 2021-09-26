import '../styles/globals.css'
import { Provider as AuthProvider } from 'next-auth';
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </AuthProvider>
}

export default MyApp

import Header from '../components/Header/index';
import './global.css';
export default ({ Component, ...pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

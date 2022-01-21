import Header from '../components/Header/index';
import Layout from '../components/layout/index';
import './global.css';
import {Provider} from 'react-redux';
import makeStore from '../store'

// header是layout
export default ({ Component, ...pageProps }) => {
  const {_initialState, ...rest} = pageProps.pageProps;
  const getLayout = Component.getLayout || (page => page);
  return (
    <Provider store={makeStore(_initialState)}>
      <Layout>
        <Header />
        {
          getLayout ? (getLayout(<Component {...pageProps} />)) :  <Component {...rest} />
        }
      </Layout>
    </Provider>
  );
};

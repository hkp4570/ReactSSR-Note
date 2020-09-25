import Header from '../components/Header/index';
import './global.css';
export default ({ Component, ...props }) => {
  return (
    <div>
      <Header />
      <Component {...props} />
    </div>
  );
};

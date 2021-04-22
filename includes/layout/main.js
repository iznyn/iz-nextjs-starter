/**
 * includes/layout/main.js
 */
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import LayoutMaster from './master';

const LayoutMain = ({ children }) => (
  <LayoutMaster>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutMaster>
);

LayoutMain.propTypes = {
  children: PropTypes.node,
};

export default LayoutMain;

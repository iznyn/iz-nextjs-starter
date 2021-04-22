/**
 * includes/layout/blank.js
 */
import PropTypes from 'prop-types';

import LayoutMaster from './master';

const LayoutBlank = ({ children }) => <LayoutMaster>{children}</LayoutMaster>;

LayoutBlank.propTypes = {
  children: PropTypes.node,
};

export default LayoutBlank;

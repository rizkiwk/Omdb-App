import React from 'react';
import { Provider } from 'react-redux';
import AppStore from './application/redux';

import App from './application/App';

class Common extends React.Component {

  render() {
    return(
      <Provider store={AppStore()}>
        <App />
      </Provider>
    );
  }

}

export default Common;
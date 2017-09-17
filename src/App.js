import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.min.css';
import FullView from './FullView';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <FullView />
      </LocaleProvider>
    );
  }
}

export default App;

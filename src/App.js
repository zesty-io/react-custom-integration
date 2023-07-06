import logo from './logo.svg';
import './App.css';
import { toJSON } from '@zesty-io/webengine-json';
import ZestyConfig from "./zesty.config.json";
import React from 'react';


function App() {
  // setup state to capture content
  const [content, setContent] = React.useState(false);

  // use effect to fetch the data
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await toJSON(ZestyConfig.stage,'about/');
      setContent(data);
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {content && <h1>{content.title}</h1>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {ZestyConfig.stage} Edit <code>src/App.js</code> and save to reload.
          
        </p>
       
      </header>
    </div>
  );
}

export default App;

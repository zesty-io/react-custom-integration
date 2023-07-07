import React from 'react';
import logo from './logo.svg';
import './App.css';
// zesty specific packages
import { toJSON } from '@zesty-io/webengine-json';
import { AutoLayout } from "@zesty-io/react-autolayout";
// zesty config, these could be optional configred in your env
import ZestyConfig from "./zesty.config.json";

function App() {
  // setup state to capture content
  const [content, setContent] = React.useState(false);

  // use effect to fetch the data
  React.useEffect(() => {
    const fetchData = async () => {
      // this example has a hard coded path, window.location.pathname 
      // if your instance uses a password, store it in a .env file and pass it as the third parameter in the toJSON() function 
      const data = await toJSON(ZestyConfig.stage,'about/');
      setContent(data);
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/** content access example */}
        {content && <h1>{content.title}</h1>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {ZestyConfig.stage} Edit <code>src/App.js</code> and save to reload.
          
        </p>
       
      </header>
      {/** layouts example (optional) */}
      {content?.meta?.layout?.json && <AutoLayout content={content} />}
    </div>
  );
}

export default App;

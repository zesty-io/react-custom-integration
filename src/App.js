import logo from './logo.svg';
import './App.css';
import { toJSON } from '@zesty-io/webengine-json';
import ZestyConfig from "./zesty.config.json";
import React from 'react';
import { AutoLayout } from "@zesty-io/react-autolayout";

function App() {
  // setup state to capture content
  const [content, setContent] = React.useState(false);

  // use effect to fetch the data
  React.useEffect(() => {
    const fetchData = async () => {
      // this example has a hard coded path, window.location.pathname 
      // will get you 
      
      const data = await toJSON(ZestyConfig.stage,'about/');
      console.log(data)
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
      {/** layouts example */}
      {content && <AutoLayout content={content} />}
    </div>
  );
}

export default App;

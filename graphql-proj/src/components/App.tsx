import React from 'react';
import { LinkList } from './LinkList';
import { CreateLink } from './CreateLink';
import '../App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <LinkList />
      <CreateLink />
    </div>
  );
};

export default App;

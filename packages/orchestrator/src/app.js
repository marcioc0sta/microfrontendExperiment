import React, {useState} from "react";

import Header from 'headerApp/Header';

const App = () => {
  const [headerTitle, setHeaderTitle] = useState('title')
  const handleHeaderTitle = e => {
    setHeaderTitle(e.target.value)
  }
  return  (
    <div>
      <Header headerTitle={headerTitle} />
      Orchestrator app demonstration
      <br/>
      <br/>
      <input onChange={handleHeaderTitle} type="text"/>
    </div>
  )
}

export default App
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MembersList from './components/MembersList';
import './App.css';

function App() {
  const [organization, setOrganization] = useState('Lemoncode')

  return (
    <div>
        <SearchBar organization={organization} setOrganization={setOrganization}/>
        <MembersList organization={organization}/>
    </div>
  );
}

export default App;

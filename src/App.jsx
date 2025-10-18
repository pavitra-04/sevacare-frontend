import React from 'react';
import './App.css';
import PatientView from './components/PatientView';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can put a logo or navbar here later */}
      </header>
      <main>
        <PatientView /> {/* <-- Your component is rendered here */}
      </main>
    </div>
  );
}
export default App;
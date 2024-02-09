import './App.css';
import CentralPanel from './core/layouts/CentralPanel';
import LeftPanel from './core/layouts/LeftPanel';

function App() {
  return (
    <div className="i-wrapper">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="center-panel">
        <div className="center-panel-wrapper">
          <CentralPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

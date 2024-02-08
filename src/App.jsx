import './App.css';
import CenterPanel from './core/layouts/CenterPanel';
import LeftPanel from './core/layouts/LeftPanel';

function App() {
  return (
    <div className="i-wrapper">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="center-panel">
        <div className="c-wrapper">
          <CenterPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

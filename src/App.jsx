import DownloadLayout from "./components/DownloadModal";
import ShortTooltip from './components/ShortTooltip';
import LongTooltip from "./components/LongTooltip";

const App = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: '#000' }}>
        <DownloadLayout />
        <ShortTooltip />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100%', backgroundColor: '#000' }}>
        <LongTooltip />
      </div>
    </>
  );
};

export default App;

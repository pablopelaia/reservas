import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './context/AppContext';
import { Selector } from './components';

function App() {
  return (
    <div className="conteiner p-5">
      <AppProvider>
        <Selector />
      </AppProvider>
    </div>
  );
}

export default App;
import Footer from "./components/footer";
import { Icon } from '@iconify/react';
import doctorIcon from '@iconify/icons-vaadin/doctor';

function App() {
  return (
    <div className="App">
      <p>Holiiiii</p>
      <Icon icon={doctorIcon} className='icon-left-menu' />
      <Footer />
    </div>
  );
}

export default App;

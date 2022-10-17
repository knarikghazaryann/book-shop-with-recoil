import { RecoilRoot } from 'recoil';
import './App.css';
import Books from './components/Books/Books'
import Header from './components/Header/Header';

const App = () => {
  return (
    <RecoilRoot>
       <Header />
      <Books />
    </RecoilRoot>
    
  )
}

export default App;

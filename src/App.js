import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'BORED APE'} traits={[{'value': 7}]} image='https://lh3.googleusercontent.com/lxp1GoTos5uWeRXhtFj03i9GxGe9BgPoqeWJy-XstXErNpWa-m334WUO0knPj13SbCOS8AadyRkD4aVRj8CdXYgzD5FqslyyxJCgxaA=w278'/>
    </div>
  );
}

export default App;

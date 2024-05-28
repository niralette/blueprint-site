import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Addons } from './routes/addons';

function App() {
  return (
    <>
      <Header />

      <main>
        <Addons />
      </main>

      <Footer />
    </>
  );
}

export default App;

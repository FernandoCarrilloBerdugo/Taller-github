import logo from './img/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Github workshop.
        </p>
        <span className='hideThis'> Where hopes and dreams go missing.</span>
        <a
          className="App-link"
          href="https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=200,fit=cover/article/main-picture/628b45168290d358908353.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Github here
        </a>
      </header>
    </div>
  );
}

export default App;

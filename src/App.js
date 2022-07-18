import profilePic from './img/Picture.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Portfolio Page</h1>
      <h2>Author: Cristobal Marquez-Glynn</h2>
      <img src={profilePic} alt="profile" />
    </div>
  );
}

export default App;

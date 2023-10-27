import { useState } from "react";
import "./App.css";
import Infos from "./data.js";

function App() {
  const [info, setInfo] = useState(null);

  const handleClick = () => {
    const getRandomIndex = Infos[Math.floor(Math.random() * Infos.length)];
    setInfo(() => getRandomIndex);
  };

  return (
    <main className="App">
      <h1>Rastgele Bilgi Uygulamasına Hoş Geldiniz</h1>
      <p>Aşağıdaki butona tıklayarak ekrana rastgele bilgi getirebilirsiniz.</p>
      <button onClick={handleClick}>Getir</button>
      {info && <article key={info.id}>{info.info}</article>}
    </main>
  );
}

export default App;

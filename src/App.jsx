import { useState } from 'react';
import './App.css';

function App() {
  const [nivel, setNivel] = useState(undefined);
  const [vitorias, setVitorias] = useState('');
  const [derrotas, setDerrotas] = useState('');
  const [saldoVitorias, setSaldoVitorias] = useState(undefined);

  function getRank(value) {
    //value é o resultado de vitórias - derrotas
    if (value <= 10) {
      return 'Ferro';
    } else if (value >= 11 && value <= 20) {
      return 'Bronze';
    } else if (value >= 21 && value <= 50) {
      return 'Prata';
    } else if (value >= 51 && value <= 80) {
      return 'Ouro';
    } else if (value >= 81 && value <= 90) {
      return 'Diamante';
    } else if (value >= 91 && value <= 100) {
      return 'Lendário';
    } else if (value >= 101) {
      return 'Imortal';
    }
  }

  return (
    <>
      <h1>DESCUBRA O NÍVEL DO SEU HERÓI</h1>
      <div>
        <div className="container-input">
          <div className="container-label">
            <div>
              <label htmlFor="vitorias" className="bgLabel">
                Vitórias
              </label>
            </div>

            <input
              id="vitorias"
              name="vitorias"
              type="number"
              value={vitorias}
              onChange={(e) => {
                setVitorias(Number(e.target.value));
              }}
            />
          </div>

          <div className="container-label">
            <div>
              <label htmlFor="derrotas" className="bgLabel">
                Derrotas
              </label>
            </div>

            <input
              id="derrotas"
              name="derrotas"
              type="number"
              value={derrotas}
              onChange={(e) => {
                setDerrotas(Number(e.target.value));
              }}
            />
          </div>
        </div>

        <div className="container-button">
          <button
            className="button"
            onClick={() => {
              setSaldoVitorias(vitorias - derrotas);
              setNivel(getRank(vitorias - derrotas));
            }}
          >
            <span>Calcular Rank</span>
          </button>
        </div>
      </div>
      <div>
        {saldoVitorias && nivel && (
          <span className="span-message">
            O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
          </span>
        )}
      </div>
    </>
  );
}

export default App;

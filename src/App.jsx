import { useState } from 'react';
import './App.css';

function App() {
  function calculaRank(vitorias, derrotas) {
    return vitorias - derrotas;
  }

  const saldoVitorias = calculaRank(95, 0);

  function getRank(saldoVitorias) {
    if (saldoVitorias <= 10) {
      return 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
      return 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
      return 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
      return 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
      return 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
      return 'Lendário';
    } else if (saldoVitorias >= 101) {
      return 'Imortal';
    }
  }

  const nivel = getRank(saldoVitorias);
  const [vitorias, setVitorias] = useState('');
  const [derrotas, setDerrotas] = useState('');

  return (
    <>
      <h1>QUALQUER COISA</h1>
      <div>
        <div className="container-input">
          <div className="container-label">
            <label htmlFor="vitorias" className="vitorias">
              Vitórias
            </label>
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
            <label htmlFor="derrotas" className="vitorias">
              Derrotas
            </label>
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

        <div>
          <button>Buscar Rank</button>
        </div>
      </div>
      <div>
        O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
        {derrotas}
      </div>
    </>
  );
}

export default App;

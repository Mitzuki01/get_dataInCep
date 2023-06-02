import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState();
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

  const getData = async()=>{
      const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      console.log(data)
      setRua(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.uf)
  }


  return (
    <div className="App">
      <header className="App-header">
        <label>cep</label>
        <input type="text" value={cep} placeholder="00000-000" onChange={(e)=> setCep(e.target.value)} onBlur={getData}/>
        <br/>
        <label>rua</label>
        <input type="text" value={rua} disabled/>
        <br/>
        <label>numero</label>
        <input type="text" value={numero} onChange={(e)=> setNumero(e.target.value)}/>
        <br/>
        <label>bairro</label>
        <input type="text" value={bairro} disabled/>
        <br/>
        <label>cidade</label>
        <input type="text" value={cidade} disabled/>
        <br/>
        <label>estado</label>
        <input type="text" value={estado} disabled/>
        <br/>
      </header>
    </div>
  );
}

export default App;

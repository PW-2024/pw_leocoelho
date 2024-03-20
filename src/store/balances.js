import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { depositar, levantar } from './index';

function Balances(){
    const dispatch = useDispatch(); 
    const saldo = useSelector(state => state.saldo); 
    const [valor, setValor] = useState(100); 
  
    const handleLevantar = (e) => {
      e.preventDefault();
      dispatch(levantar(valor)); 
    };
  
    const handleDepositar = (e) => {
      e.preventDefault();
      dispatch(depositar(valor));
    };
  
    const handleChange = (event) => {
      setValor(Number(event.target.value)); 
    };

    //vou aproveitar a folha de estilos inicial do create-react-app as classes App-header e App
    return (
      <div className="App-header App"> 
        <h1>ATM</h1>
        <form>
          <input type='number' value={valor} onChange={handleChange} /><br />
          <button onClick={handleLevantar}>Levantar</button>
          <button onClick={handleDepositar}>Depositar</button><br />
          <p>Saldo atual: {saldo.toFixed(2)}€</p> 
        </form>
      </div>
    );
  }
  
  export default Balances;
import { useContagem } from "./reducers/contagem";

const App = () => {
  const [contagem, contagemDispatch] = useContagem();
  return (
    <div className="p-5">
      Contagem: {contagem.count}
      <hr />
      <button className="p-3" onClick={()=>contagemDispatch({type:'ADD'})}>Adicionar</button>
      <button className="p-3" onClick={()=>contagemDispatch({type:'DEL'})}>Remover</button>
      <button className="p-3" onClick={()=>contagemDispatch({type:'RESET'})}>Resetar</button>
    </div>
  );
}

export default App;
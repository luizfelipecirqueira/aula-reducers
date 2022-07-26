import { ChangeEvent, useState } from "react";
import { useContagem } from "./reducers/contagem";
import { usePeopleList } from "./reducers/people";


const App = () => {

  const [contagem, contagemDispatch] = useContagem();
  const [list, dispatchList] = usePeopleList();

  const [nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
    if (nameInput) {
      dispatchList({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const deletePerson = (id: string) => {
    dispatchList({
      type: 'DEL',
      payload: { id }
    });
  }

  const handleOrderButton = () => {
    dispatchList({
      type: 'ORDER',
      payload: {
        name: undefined,
        id: undefined
      }
    });
  }

  return (
    <div className="p-5">
      Contagem: {contagem.count}
      <hr />
      <button className="p-3" onClick={() => contagemDispatch({ type: 'ADD' })}>Adicionar</button>
      <button className="p-3" onClick={() => contagemDispatch({ type: 'DEL' })}>Remover</button>
      <button className="p-3" onClick={() => contagemDispatch({ type: 'RESET' })}>Resetar</button>
      <hr />

      <p>Adicionar Pessoa</p>
      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />

    <button onClick={handleOrderButton}>Ordenar</button>

      <hr />
      <p>Lista de Pessoas:</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name} <button onClick={() => deletePerson(item.id)}>Deletar</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
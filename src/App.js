import React, { useState } from 'react';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [listItems, setListItems] = useState([]);
  const [date, SetDate] = useState('');

  const addTodo = (event) =>{
    event.preventDefault();
    setListItems([...listItems,{desc,date}]); 
    //lisää taulukkoon perään uuden. Koottu yhdeksi objektiksi, joka voidaan eritellä myöhemmin
  }
  const descriptionChanged = (event) =>{
    setDesc(event.target.value);
    
  }
  const dateChanged = (event) =>{
    SetDate(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        To do:
        <input type = "text" onChange={descriptionChanged} value={desc} name="todo"/>
        Date:
        <input type = "text" onChange={dateChanged} value={date} name="date"/>
        <input type = "Submit" value="Add"/>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {listItems.map((item, index) => 
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.desc}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

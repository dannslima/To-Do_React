import {useState} from 'react';
import './App.css';


let initialState = [
  {
    id: 1,
    descricao: 'Primeira atividade',
  },
  {
    id: 2,
    descricao: 'Segunda atividade',
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
 
 

  function addAtividade(e){
    e.preventDefault();
    const atividade = {
      
        id: document.getElementById('id').value,
        descricao: document.getElementById('descricao').value,
    }
    console.log(atividade)
    atividades.push();
    setAtividades([...atividades, {...atividade}])
  }


  return (
    <>
    
    <form className="row g-3">
      <div className="col-md-6">
        <label for='inputEmail14' className="form-label">Id</label>
        <input id="id" type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label for='inputEmail14' className="form-label">Descricao</label>
        <input id="descricao" type="text" className="form-control" />
      </div>
      <hr/>
      <div class="col-12">
        <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
      </div>  
        

    </form>
    <div className='mt-3'>
      {atividades.map(ativ =>(
        <div  key={ativ.id} class="card mb-2 shadow-sm">
          <div class="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>
                  teste
              </h5>
              <h6>
                    prioridade
              </h6>
  
            </div>
              <p class="card-text">{ativ.id} - {ativ.descricao}</p>
          </div>
        </div>
      ))}
          
      
     
    </div>
    </>
  );
}

export default App;

import {useState} from 'react';
import './App.css';


let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'titulo',
    descricao: 'Primeira atividade',
  },
  {
    id: 2,
    prioridade: '2',
    titulo: 'titulo',
    descricao: 'Segunda atividade',
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
 
 

  function addAtividade(e){
    e.preventDefault();
    const atividade = {
      
        id: document.getElementById('id').value,
        prioridade: document.getElementById('Prioridade').value,
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
    }
    console.log(atividade)
    atividades.push();
    setAtividades([...atividades, {...atividade}])
  }

  function prioridadeLabel(param){
    switch(param){
      case '1':
        return 'Baixa';
      case '2' :
        return 'Normal';
      case '3'  :
        return 'Alta';
      default:
        return 'Não definido'  ;
    }
  }

  function prioridadeStyle(prioridade){
    switch(prioridade){
      case '1':
        return 'smile';
      case '2' :
        return 'meh';
      case '3'  :
        return 'frown';
      default:
        return 'Não definido'  ;
    }
  }
  return (
    <>
    
    <form className="row g-3">
      <div className="col-md-6">
        <label  className="form-label">
          Id
        </label>
        <input id="id" type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
      <select id="Prioridade" className="form-select">
        <option defaultValue='0' selected>Selecionar...</option>
        <option value="1">Baixa</option>
        <option value="2">Normal</option>
        <option value="3">Alta</option>
      </select>
  </div>
     <div className="col-md-6">
        <label  className="form-label">Título</label>
        <input id="titulo" type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <label  className="form-label">Descricao</label>
        <input id="descricao" type="text" className="form-control" />
      </div>
      <hr/>
      <div className="col-12">
        <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
      </div>  
        

    </form>
    <div className='mt-3'>
      {atividades.map(ativ =>(
        <div  key={ativ.id} className="card mb-2 shadow-sm">
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>
                <span className="badge bg-secondary me-1">
                    {ativ.id}
                </span> {ativ.titulo}
              </h5>
              <h6>
                  Prioridade:
                   
                    <span className='ms-1 text-black'> 
                      <i className={'me-1 far fa-'+ prioridadeStyle(ativ.prioridade) } ></i>
                      {prioridadeLabel(ativ.prioridade)}
                    </span>
              </h6>
            </div>
              <p classname="card-text"> {ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 -0 border-top'>
                <button className='btn btn-outline-primary me-2 btn-sm'>
                  <i className='fas fa-pen me-2'></i>
                    editar
                </button>
                <button className='btn btn-outline-danger btn-sm'>
                  <i className='fas fa-trash '></i>
                    Deletar
                </button>
              </div>
          </div>
        </div>
      ))}
          
      
     
    </div>
    </>
  );
}

export default App;

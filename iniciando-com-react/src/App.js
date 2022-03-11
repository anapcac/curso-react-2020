import React from 'react';

function App ( props ){
  // O state guarda tudo que é variável dentro do componente e é utilizado para valores de variáveis que serão 
  // modificados
// state = {
//   nome : ""
// }

// constructor(){
//   super()
//   this.modificarNome = this.modificarNome.bind(this)
// }
// modificarNome = (event) => {  
//     nome: event.target.value  
// }

//Componente React
const criaComboBox = () => {
  const opcoes = ["Aninha","Carolzinha"]
  const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
  
  return (
    <select>
      {comboBoxOpcoes}
    </select>  
  )
}
const modificarNome = event => {
  console.log(event.target.value)
}
//{this.criaComboBox()}
  //render(){
    // console.log('Entrei no Render')
    //Toda vez que se quiar um componente é interessante coleçar o nome com letra Maiúscula
    //Esta variável é uma Tag customizada
    const MeuComboBox = () => criaComboBox()
    return(
    <>
      <input className="text-centralizado" type="text"  value={props.nome} onChange={modificarNome} />
      <h1>Hello {props.nome} sua idade é {props.idade}</h1>
      <MeuComboBox/>
    </>
    )    
 // }
}

export default App;

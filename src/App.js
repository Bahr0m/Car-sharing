import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header.jsx';
import Tech from './Components/Tech.jsx';
import Per from './Components/First/Per';
import Seco from './Components/Seco/Seco';
import Third from './Components/Third/Third';


// let data = [
//   {
//     id: 32,
//     type: 'text',
//     value: '123',
//     width: '50%',
//     label: 'Another text',
//     placeholder: 'name'
//   },
//   {
//     id: 23,
//     type: 'text',
//     value: '456',
//     width: '50%',
//     label: 'Another text2',
//     placeholder: 'surname'
//   },
//   {
//     id:26,
//     type: 'number',
//     value: '3',
//     width: '100%',
//     label: 'Another text3',
//     placeholder: 'age'
//   },
//   {
//     id: 39,
//     type: 'password',
//     value: '',
//     width: '100%',
//     label: 'Another text4',
//     placeholder: 'password'
//   },
//   {
//     id: 41,
//     type: 'date',
//     value: '01.01.2022',
//     width: '50%',
//     label: 'Another text5',
//     placeholder: 'name'
//   }];
// const App = () => {
//     const [date,setDate]=useState(data)
//     const makeChange=(e)=>{
//       const ids=e.target.id
//       const newDate = Date.map((item) => {
//         if (item.id === +ids) {
//           item.value = e.target.value;
//           return item
//         }

//         return item
//       })


//       setDate(newDate)
//     }
//     console.log(date)
//   return (
//     <>
//     {
//     date.map((it)=><div key={it.id}>
//       <label >{it.label}
//         <input style={{width:it.width}} id={it.id} onChange={makeChange} placeholder={it.placeholder} type={it.type} value={it.value}  />
//       </label>
//     </div>
//     )
//     }
const App = () =>{
  return(
    <>
     <Header /> 
     <Routes>
      <Route path='/' element={<Tech/>} />
      {/* <Route path='/First' element={<Per/>}/> */}
      {/* <Route path='/Seco' element={<Seco/>}/> */}
      {/* <Route path='/Third' element={<Third/>}/> */}
    </Routes>
    </>
    )
}


export default App;

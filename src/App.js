import React, { Component } from 'react';
import './App.css';
// import { name, age } from './components/Data';
// import Orange from './components/Data'; //Buradaki Orange takma ad olarak geçer gösterilen dosyadaki verileri çeker o isim ile
import Booklist from './components/Booklist';

//Stateless 
// function App() {
//   return (
//     <div>
//       Hello From App
//       <BookList/>
//     </div>
//   )
// }

// *** Class based ||state || life cyle */
// CLASS BASED COMPONENTS
class App extends Component{
  render() {
    return (
      <div>
        {/* Hello From App */}
         <Booklist/>
      </div>
    )
  }
}


//Fonksiyonel Component Önceki
// function App() {
//   return (
//     <div>
//       Hello From App
//        <Orange/>
//       <p>{name}</p>
//       <p>{age}</p>
       
//     </div>
//   )
// }
export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const numbers = [1,2,3,4,6];
  // const sum = numbers.reduce((acc, cur)=>{
  //   return cur*2;
  // },10)
  // console.log(sum);

  // const users = [
  //   { name: "Jaehee", age: 27 },
  //   { name: "Min", age: 24 },
  //   { name: "Soo", age: 30 }
  // ];

  // const totalAge = users.reduce((acc, user)=>{
  //   if(user.age >= 25){
  //     return acc+user.age
  //   }
  //   return acc;
  // }, 0);
  // // const averageAge = totalAge / users.length

  // console.log(totalAge)

  // const sum = users.reduce((acc, cur)=>{
  //   return cur.age>=25? acc+cur.age : acc;
  // },0)
  // console.log(sum);

  // const totalAge = users.reduce((acc, cur)=>{
  //   return acc+cur.age
  // },0)
  
  // const pCount = users.length
  // const averageAge = totalAge/pCount
  // console.log(averageAge);

  const users = [
    { id: 1, name: "Jaehee", age: 27 },
    { id: 2, name: "Min", age: 24 },
    { id: 3, name: "Soo", age: 30 },
  ];

  const byId = users.reduce((acc, cur)=>{
    acc[cur.id] = cur;
    return acc;
  }, {})
  console.log(byId);

  const byName = users.reduce((acc, cur)=>{
    acc[cur.name] = cur.age;
    return acc;
  }, {})
  console.log(byName);

  // const byId = users.reduce((acc, cur)=>{
  //   acc[cur.id] = cur;
  //   return acc;
  // }, {})
  // console.log(byId[1]);

  // const byName = users.reduce((acc, cur)=>{
  //   acc[cur.name] = cur.age;
  //   return acc
  // }, {})
  // console.log(byName);



  // const users2 = [
  //   { name: "Jaehee", city: "Seoul" },
  //   { name: "Min", city: "Busan" },
  //   { name: "Soo", city: "Seoul" },
  // ];

  // const grouped = users2.reduce((acc,cur)=>{
  //   const key = cur.city;
  //   if(!acc[key]){
  //     acc[key] = [];
  //   }
  //   acc[key].push(cur.name);
  //   return acc;
  // }, {})
  // console.log(grouped)

  // const names = ['Jaehee', 'Min', 'Soo'];

  // const result = names.reduce((acc, cur, idx)=>{
  //   return idx === 0 ? cur:acc+", "+cur;
  // }, "");
  // console.log(result);

  const apiResults = [
    { status: "success" },
    { status: "success" },
    { status: "error" },
    { status: "loading" },
  ];

  const summary = apiResults.reduce((acc, cur)=>{
    acc[cur.status] = (acc[cur.status] || 0)+1
    return acc;
  }, {})
  console.log(summary)



  return (
    <div>
      
    </div>
  )
}

export default App

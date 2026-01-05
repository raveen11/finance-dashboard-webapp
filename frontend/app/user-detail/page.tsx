export default function UserDetails(){
    return <div>User Details page</div>
}

 
//  async function addUser() {
//   const url = `http://localhost:5000/api/auth/register`;
//   try {
//     const response = await fetch(url,{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({name:'Rabin1',email:'rabin1@gmail.com',password:'password'})
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('ABCD---addded',result);
//   } catch (error:any) {
//     console.error(error.message);
//   }
// }

  
//  async function createPerson() {
//   const url = `http://localhost:5000/api/person/create`;
//   try {
//     const response = await fetch(url,{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({name:'Rabin Neupane',email:'rabin1@gmail.com',details:'this is first person'})
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('ABCD---addded person',result);
//   } catch (error:any) {
//     console.error(error.message);
//   }
// }



// async function logOut() {
//   const url = `http://localhost:5000/api/auth/logout`;
//   try {
//     const response = await fetch(url,{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: 'include',
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('ABCD---logged out',result);
//     if(result?.success){
//       window.location.href = '/login';
//     }
//   } catch (error:any) {
//     console.error(error.message);
//   }
// }


// async function createTransaction() {
//   const url = `http://localhost:5000/api/transaction/create`;
//   try {
//     const response = await fetch(url,{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({type:'withdrawal',amount:10000,personId:'69596fc2cff1026d0a77b264',notes:'this is my first withdrawn',isMutual:true,purpose:'Personal Loan'}),
//       credentials: 'include',
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('ABCD---transaction added',result);
   
//   } catch (error:any) {
//     console.error(error.message);
//   }
// }

//  <button onClick={()=>addUser()}>
//           Add User
//         </button>


//         <button onClick={()=>logOut()}>
//           Log Out
//         </button>


//         <button onClick={()=>createPerson()}>
//           Create Person
//         </button>



//         <button onClick={()=>createTransaction()}>
//           Create Transaction
//         </button>

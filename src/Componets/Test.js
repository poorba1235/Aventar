// import React, { useContext, useState } from 'react';
// import { data } from './Home';

// export default function Test() {
//   // Access the context value
//   const user = useContext(data); 
//   const [show , setShow] = useState(true);
//   const[content,setContent]  =useState();

//   return (
//     <div>
//       <h1>User from Context:</h1>
//       {/* Display the user fetched from the context */}
//       <p>{user}</p>
//       <button  onClick={()=>setShow(!show)} style={{margin:"10px 4px",backgroundColor:"red"}}>
//       {show ? "Hide Element Below" : "Show Element Below"}
//       </button>
//       {show && <div>Toggle</div>}
      
//      <input type='text' onChange={(e)=>setContent((e.target.value))}></input>
//      {content && <div><button>Button</button></div>}
//      {content}
//      <img src="/Images/image.jpg" alt="Description" style={{ width: '10%', height: '10%' }} />
//     </div>
//   );
// }

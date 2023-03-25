// import { useEffect } from "react";
//mport {useState} from "react";
 //import { BASE_URL } from "../API";
//import React from "react";
import { useState } from "react";
import { BASE_URL } from "../API";
;
// function DELETE(postId) {
//    const handleSubmit = async (event) => {
    
//     const username = event.target[0].value;
//     const password = event.target[1].value

//     const authResult = await fetch(`${BASE_URL}posts/${postId}`, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',    
//         }
//     });
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.message);
//     }
//   }};

// export const Delete = async (postId) => {
//   const response = await fetch(`${BASE_URL}posts/${postId}`, {
//     method: "DELETE",
//   });
//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message);
//   }
// return(
// //<form id="delete" onSubmit={Delete} ><button type="submit" class="submit-btn" >Delete Post</button></form>
//)
// const handleDelete = async (postIdToDelete) => {
//   console.log('postIdToDelete', postIdToDelete);
//   const response = await fetch(`${BASE_URL}post/${postToDelete}`,{
//     method: "DELETE",
//   });
//   const data = await response.json();
//   //console.log('data: ', data);
//   if(data) {
//     const newPost = post.filter(post => post.id !== postIdToDelete);
//   setPosts(newPost);
//   }
//  }
// handleDelete();

const Delete = async() =>  {

            
  const handleDelete = async (postIdDelete) => {
    console.log('postIdToDelete: ', postIdDelete);
    const response = await fetch(`${BASE_URL}posts`, {
    
            method: 'DELETE',
           
  }); 
  const data =  response.json();
   
  
  if(data){
   // const newPosts = posts.filter(post => post.id !== postIdDelete);

    //console.log('data ', data);
  }else {
  
    console.log(data.post.author.username);
  
  }
 
  }; 
  
  }
  
  export {Delete};
  
// });
//         try {
          
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`
//               }
                    
//           const result = await response.json();
//           SetPosts({result});

//           return <>
//           <p>
//             My Post
//           </p>
//            {
//             posts.map(post => <div key={post.author.username.lbajoie}>
              
//             </div>)
//            }
//                </>
            
//       } catch(error){
//         console.log(error)
//         }
//  handleDelete();
//         }

  


// export {Delete}
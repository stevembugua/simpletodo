import './../Post.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import axios from 'axios';
const Post = () => {
 const {id}  = useParams()

 const [post, setPost] = useState(null)
 const [show, setShow] = useState(false)

 useEffect(function(){
   //loading or calling a function once on  render-
   //when an event or a variable changes

   setTimeout(()=>(
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>{
        setPost(response.data)
        console.log(post)
        setShow(true)
        }
        )
   ),1000)

  
},[])



    return ( 

    //     show  && 
    //     <div className="post-template">    
    //     <div className="title">
    //     <h1>{post.title}</h1>
    //     {console.log(post.title)}
    //     </div>
    //    </div>



    show ? <div className="post-template"> <div className="title"><h1>{post.title}</h1></div><div>{post.body}</div></div>
     :     <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}><ReactLoading type={'bars'} color={'red'} height={'5%'}/></div>
       
        

     );
}
 
export default Post;
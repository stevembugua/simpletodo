
import { useState } from 'react';
import { useEffect } from 'react';
import TopMenu from '../Components/Menu';
import TodoCard from '../Components/Card';
import axios from 'axios';
const AllBlogs = () => {
    const [posts, setPosts] = useState([])


  useEffect(function(){
    //loading or calling a function once on  render-
    //when an event or a variable changes
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((response)=>setPosts(response.data))
},[])

const [show, setShow] = useState(true)

    return <>
               
                <TopMenu />                 
                {

                show ? posts.map((post, index)=>(
                  <TodoCard title={post.title} description={post.body} postID={post.id} key={index} />
                ))
                : <h3 className='empty-state' >Ooops... No blog Articles found </h3>

                  }
            
          
    </>;
}
 
export default AllBlogs;
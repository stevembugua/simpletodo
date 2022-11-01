import { Link } from "react-router-dom";
const TodoCard = ({title, description, postID}) => {

    return ( 
    <>
    <div className="todo" >
    <Link to={`posts/${postID}`}>{title}</Link>
    <p> {description}</p>
    </div>
 
    </>

     );
}
 
export default TodoCard;
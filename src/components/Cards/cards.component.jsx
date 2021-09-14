import './cards.styles.css';
import { useHistory } from "react-router-dom";
const Card = (data) => {
    const history = useHistory();
    const {src,title,desc} = data.data;
    return ( 
        
            <div className='card' onClick={() => history.push('/details')}>
            <img src={src} alt="" />
            <div className="card-info">
                <h2>{title}</h2>
                <h4>{desc}</h4>
            </div>
            </div>
       
        
     );
}
 
export default Card;
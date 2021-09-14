import data from "../carddata";
import Item from "../ListItem/listitem.component";
import './trending.styles.css';

const Trending = () => {
    return ( 
        <div className='trending'>
            {data.map((x,idx)=>{
                return(<Item key={idx} props={x}></Item>)
            })}
        </div>
     );
}
 
export default Trending;
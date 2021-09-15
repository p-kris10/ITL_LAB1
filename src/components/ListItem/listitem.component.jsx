import './listitem.styles.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";
const Item = (props) => {
    const history = useHistory();
     const {src,location,title,desc,star,price} = props.props
    return (
        <div className='searchResult' onClick={() => history.push('/ITL_LAB1/details')}>
            <img src={src} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{desc}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
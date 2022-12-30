
import PropTypes from 'prop-types';
import { Online } from "./Friend.styled";
import { Offline } from "./Friend.styled";



function Friend({ avatar, name, isOnline }) {
    return (
        
        
        <li className="item">
            
            
            { isOnline ? <Online/> : <Offline/>}
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</li>
   

      )

}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}

  export default Friend
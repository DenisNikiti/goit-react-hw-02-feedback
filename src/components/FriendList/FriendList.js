import PropTypes from 'prop-types';
import Friend from "./Friend"
function Friendlis({data}) {
    return (<ul>
           
        {data.map((friend) => {
            return (<Friend
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                id={friend.id}

            />)

        }) }

      </ul>)
}


Friendlis.propTypes = {
   data:PropTypes.array.isRequired,

}
export default Friendlis
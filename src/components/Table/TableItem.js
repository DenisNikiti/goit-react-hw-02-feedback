import PropTypes from 'prop-types';

function TableItem({label,percentage}) {
    return (<div>
       
        <span className="label">{label}</span>
        <span className="percentage"> {percentage}%</span>





   </div>) 
}


TableItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
}

export default TableItem
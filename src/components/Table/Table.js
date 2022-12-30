import PropTypes from 'prop-types';
  import TableItem from "./TableItem"

const Table = (({items,title = null,id}) => {
    
  
  return (<section className="statistics">
      
    {title && <h2 className="title">{title}</h2>}
      

  <ul className="stat-list">
    
      {items.map((item) => {
        return (<TableItem
          key={item.id}
            label={item.label}
            percentage={item.percentage}
          />)


        })}

  </ul>
</section>)
})

Table.propTypes = {
  items: PropTypes.array.isRequired,
  title:PropTypes.string,
}

export default Table

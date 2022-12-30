
import Transaction from "./Transaction"
import PropTypes from 'prop-types';


function TransactionHistory({history}) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
        {history.map((transaction) => {
            return (<Transaction
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}

            />)
        } )}
    </tr>
  </tbody>
</table> 



     )
}


TransactionHistory.propTypes = {
    history:PropTypes.array.isRequired
}

export default TransactionHistory

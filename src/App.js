
import Profile from "./components/Profile/Profile"
import data from "./path/user.json"
import Staticis from "./path/statistic.json"
import Table from "./components/Table/Table"
import Friends from "./path/friends.json"
import Friendlis from "./components/FriendList/FriendList"
import Transactions from "./path/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

function App() {
  return (
    <div>



       

       <Profile
      avatar={data.avatar}
      name={data.username}
      tag={data.tag}
      location={data.location}
        stats={data.stats} />
      
      

      <Table
        items={Staticis}
        title={Staticis.title}
        

      />
      
      <Friendlis
        data={Friends}

      />
    
      <TransactionHistory
         history = {Transactions}
      />


    </div>
   
  )
}

export default App;

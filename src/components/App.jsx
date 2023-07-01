import user from '../data/user.json';
import Profile from './Profile/Profile';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Task from './Task/Task';


export default function App() {
    return (
        <div>
            <Task title={"Social network profile"}>
                <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            </Task>
            
            <Task title={"Statistics section"}>
                <Statistics title="Upload stats" stats={data} />
                <Statistics stats={data} />
            </Task>

            <Task title={"Friends list"}>
                <FriendList friends={friends} />
            </Task>
            
            <Task title={"Transaction history"}>
                <TransactionHistory items={transactions} />
            </Task>
            
        </div>
        
    )
    
}
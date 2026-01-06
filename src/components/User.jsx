import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchUsers, selectedUser, setSearch  } from "../redux/actions";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users) || [];
    const search = useSelector((state) => state.search) || "";
    const selectedUser = useSelector((state) => state.selectedUser);

    useEffect(()=> {
        dispatch(fetchUsers());
    },[dispatch]);
    console.log("users", users) 

    const filteredUsers = users.filter((u)=> u?.name?.toLowerCase().includes(search.toLowerCase()));

    
    return (
        
        <div>
            <h2>User</h2>
            <input type="text" placeholder="Search user" value={search} onChange={(e)=> dispatch(setSearch(e.target.value))}/>
            <ul>
                {filteredUsers.map((user) => (
                    <li
                    key={user.id}
                    onClick={() => dispatch(selectedUser(user))}
                    >
                    {user.name}
                    </li>
                ))}
                </ul>            
            
        </div>
    )

}
export default Users;
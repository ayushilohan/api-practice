//import data from './mockup.json'
import React, {useEffect, useState} from 'react'
import './UserTable.css'

const UserTable = ()=>{
    const [details, setDetails] = useState([]);

    useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(responseData => {
        try{
            setDetails(responseData.users);
        }
        catch{
            console.log("error while fetching users details");
        }
    })
    .catch(error => console.log('Error:',error))
    },[])


    return(
        <div className='usertable'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th> 
                    <th>eMail</th>
                </tr>
            </thead>
            <tbody>
                {details.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td> 
                        <td>{item.firstName}</td> 
                        <td>{item.lastName}</td> 
                        <td>{item.email}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default UserTable;
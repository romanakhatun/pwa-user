import React, { useEffect, useState } from 'react';
import './user.css';
import avatar from '../../images/avatar.png';

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        res.json()
          .then(res => {
            setData(res)
            localStorage.setItem("users", JSON.stringify(res))
          })
      }).catch(err => {
        setMode('offline')
        let collection = localStorage.getItem('users');
        setData(JSON.parse(collection))
      })
  }, []);

  return (
    <div>
      <div>
        {
          mode === 'offline' ?
            <div className="alert alert-warning" role="alert">
              <p>you are in offline mode or some issue with connection</p>
            </div> : null
        }
      </div>
      <div className="userContainer">
        {
          data.map((item, idx) =>
            <div key={idx} className="singleUser">
              <img className="avatar" src={avatar} alt="avatar" />
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.address.street}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Users;
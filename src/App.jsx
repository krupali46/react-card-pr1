import React from 'react';
import Card from './components/Cards/Card';
import './App.css';
import users from './containers/data';

function App() {

  console.log(users);

  let users1 = users;

  console.log("users1", users1);
  return (
    <>
      {
        users1.map((user) => {
          return (
            <Card
              image={user.image}
              username={user.username}
              email={user.email}
              fullname={user.firstName}
              lastname={user.lastName}
              midname={user.maidenName}
              phone={user.phone}
              birthDate={user.birthDate}
              address={user.address.address}
              city={user.address.city}
              state={user.address.state}

            />

          )

        })

      }

    </>
  )
}

export default App

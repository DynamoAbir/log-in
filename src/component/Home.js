import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {user}= useContext (AuthContext);
    return (
        <div>
            <h2>This is Home {user?.email&& <span>{user.email}</span>} </h2>
        </div>
    );
};

export default Home;
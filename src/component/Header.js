import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log('context',user);
    
    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                 <Link to='/' className="btn btn-ghost normal-case text-xl">My App</Link>
                 <Link to='/'className="btn btn-ghost normal-case text-xl" >Home</Link>
                 <Link to='/login' className="btn btn-ghost normal-case text-xl">Log In</Link>
                 <Link to='/register' className="btn btn-ghost normal-case text-xl">Register Now</Link>
                {user?.email && <span>welcome, {user.email}</span>}
                <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
            </div>
        </div>
    );
};

export default Header;
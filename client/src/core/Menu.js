import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import checkAuthenticated from '../App';
import setAuth from '../App';
import logout from '../user/Product';
import {itemTotal} from '../user/cartHelpers'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: '#ff9900'};
    } else {
        return {color: '#ffffff'}
    }
};

const Menu = ({history}) => {
    return(
        <div>
            <ul className='nav nav-tabs bg-primary'>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        style={isActive(history, '/')}
                        to='/home'>Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        style={isActive(history, '/shopping')}
                        to='/shopping'>Shop
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        style={isActive(history, '/cart')}
                        to='/cart'>
                            Cart {" "}
                            <sup>
                              <small className= "cart-badge">{itemTotal()} </small>
                            </sup>
                    </Link>
                </li>

                {checkAuthenticated() &&(
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        style={isActive(history, '/user/dashboard')}
                        to='/dashboard'>Dashboard
                    </Link>
                </li>
                )}
                {!checkAuthenticated() && (
                  <ul>
                        <li>
                            <Link
                                className='nav-link'
                                style={isActive(history, '/signin')}
                                to='/login'> Signin
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='nav-link'
                                style={isActive(history, '/signup')}
                                to='/register'> Signup
                            </Link>
                            </li>
                    </ul>
                )}
                {checkAuthenticated() && (
                    <li>
                        <Link
                            className='nav-link'
                            style={{cursor: 'pointer', color: '#ffffff'}}
                            to = '/login'
                            >Signout
                        </Link>
                    </li>
                )}
                <li className='nav-item'>
                    <Link
                      className='nav-link'
                      style={isActive(history, '/signin')}
                      to='/login'> Signin
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                      className='nav-link'
                      style={isActive(history, '/signup')}
                      to='/register'> Signup
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Menu);

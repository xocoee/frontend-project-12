import React from 'react';

const Header = () => {
    return (
        <div className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand">Hexlet Chat</a>
                <button type="button" className="btn btn-primary">Выйти</button>
            </div>
        </div>
    )
};

export default Header;

import * as React from 'react';

export const Header = () => {
    return (
        <div className="flex header justify-between">
            <div className="nav-left">
                <a className="hover:text-blue-500" href="/">
                    <span className="text-md">Jonathan Chiu</span>
                </a>
            </div>
            <div className="nav-right">
                <a className="hover:text-blue-500 w-24 text-right" href="/">
                    <span className="text-md">About</span>
                </a>
                <a className="hover:text-blue-500 w-24 ml-4 text-right" href="/music">
                    <span className="text-md">Music</span>
                </a>
            </div>
        </div>
    );
}

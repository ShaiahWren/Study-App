import React, { useEffect } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";


const Navbar = () => {
    useEffect(() => {
        var sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, { edge: "right" });
    }, []);
    return (
        <>
            <nav>
                <div className="nav-wrapper z-depth-0 ">
                    <a href="#!" className="brand-logo center">j.DevSpace</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                        <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">Team</a></li>
                        <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</a></li>

                    </ul>

                    <ul id="nav-mobile" className="left">
                        <li><a href="https://github.com/ShaiahWren/Study-App" target="_blank"><span className="fab style2 major fa-github" style={{ padding: '12px', fontSize: '35px' }}></span></a></li>
                    </ul>
                </div>
            </nav>

            <ul id="mobile-demo" className="sidenav">
                <li><a href="/dashboard" className="waves-effect waves-light btn-small light-blue darken-2">Dashboard</a></li>
                <li><a href="/aboutus" className="waves-effect waves-light btn-small light-blue darken-2">Team</a></li>
                <li><a href="/" className="waves-effect waves-light btn-small light-blue darken-2">Home</a></li>

            </ul>

        </>
    )
}

export default Navbar;

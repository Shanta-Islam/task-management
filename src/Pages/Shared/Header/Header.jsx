
import { useEffect, useState } from "react";
import {  Link, NavLink } from "react-router-dom";



const Header = () => {
    // const { user, logOut } = useContext(AuthContext);
    // const handleSignOut = () => {
    //     logOut()
    //         .then(() => {
    //             toast.success('Successfully Log Out');
    //         })
    //         .catch()
    // }
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "hover:bg-cyan-600 bg-cyan-600 hover:text-white text-white px-5 py-2 text-md rounded" : "hover:bg-cyan-600 hover:text-white text-white px-5 py-2 mx-2 text-md rounded"}>Home</NavLink></li>
        <li><NavLink to="/all-assignments" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "hover:bg-cyan-600 bg-cyan-600 hover:text-white text-white px-5 py-2 text-md rounded" : "hover:bg-cyan-600 hover:text-white text-white px-5  py-2 mx-2 text-md rounded"}>Assignments</NavLink></li>
       
    </>


    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    // );
    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // };
    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme]);

    const [headerColor, setHeaderColor] = useState("")
    
    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeaderColor("#164863")
            : setHeaderColor("")
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <div className="navbar fixed top-0 z-50" style={{ background: headerColor }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-white"><img src="https://i.ibb.co/92jNLKD/logo-1.png" alt="" className="w-6 lg:w-10" />studyNest</a></Link>
                {/* {
                    theme=== 'light' ?
                    <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-black"><img src="https://i.ibb.co/PYdLcCM/logo-2.png" alt="" className="w-6 lg:w-10" />eShopHub</a></Link>
                    : <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-white"><img src="https://i.ibb.co/Bj9q11D/logo-1.png" alt="" className="w-6 lg:w-10" />eShopHub</a></Link>
                } */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;
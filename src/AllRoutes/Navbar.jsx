import { Link } from "react-router-dom";
function Navbar() {

    const links = [
        { path: "/signup", title: "Signup" },
        { path: "/login", title: "Login" },
        { path: "/", title: "Dashboard" },
    ]
    return(
        <div className = "navbar" style={{ display:"flex", justifyContent:"space-around" , backgroundColor :"#37d2dd" ,padding:"25px" , fontSize:"25px", color:"white"}} >
            {links.map((ele)=>
                 <Link to={ele.path}>{ele.title}</Link>
            )}
           
        </div>
    )
}

export { Navbar }
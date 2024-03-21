import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const[open , setOpen] = useState(false)
    const routes = [
        {
          id: 1,
          path: "/",
          name: "Home",
          
        },
        {
          id: 2,
          path: "/about",
          name: "About",
          
        },
        {
          id: 3,
          path: "/contact",
          name: "Contact",
         
        },
        {
          id: 4,
          path: "/products",
          name: "Products",
         
        },
        {
          id: 5,
          path: "/profile",
          name: "Profile",
         
        }
      ];
      
    return (
       <nav className="text-black p-6 bg-gray-400">
        <div className=" md:hidden text-2xl" onClick={() =>setOpen(!open)}>
            {
                open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=""></AiOutlineMenu>
            }
        
        </div>
        <ul className={`md:flex duration-1000 absolute md:static
        ${open ? 'top-12' : '-top-60'}
        bg-purple-200 px-6 shadow-lg`}>
        {
            routes.map(route=><Link  key={route.id} route={route}></Link>)
         
        }
        </ul>
       </nav>
    );
};

export default Navbar;
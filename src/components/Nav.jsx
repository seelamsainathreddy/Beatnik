import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useAuth } from "../context/AuthContext";
import { NavLink } from 'react-router-dom';



const Nav = () => {
  const { isAuth } = useAuth();

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
       
            className='m-0 w-[85px] h-[85px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        {!isAuth && (
            <>
            <NavLink to="/login" className='flex items-center gap-2' activeClassName='active'>
              <i className="ion-log-in"></i> Login
            </NavLink>
            <NavLink to="/register" className='flex items-center gap-2' activeClassName='active'>
              Sign up
            </NavLink>
          </>
          )}
        </div>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

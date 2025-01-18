import { Link } from 'react-router-dom'
import logo from './../assets/logo.jpeg'
const SideBar=(toggleNav:boolean)=>{
   const showSideBar=()=>{
    return null;
   }

  return (
    <div
      className={
        toggleNav
          ? "side-bar text-white lg:text-black absolute bg-teal-500 lg:bg-white  md:relative flex flex-col justify-between gap-3 w-3/4 sm:w-2/5 md:w-2/6 lg:w-1/5 min-w-20 border-2 shadow-md shadown-teal-500 pe-3  h-screen"
          : "side-bar  md:relative flex flex-col justify-between gap-5    w-max min-w-20 border-2 border-teal-500 shadow-md shadown-teal-500 pe-3  h-screen"
      }
    >
      <div className="flex flex-col gap-1">
        {toggleNav ? (
          <div className="flex w-full justify-end items-center md:hidden ">
            <img
              src={logo}
              alt="logo de l'application"
              onClick={showSideBar}
              className="w-8 h-8"
            />
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <div className="flex justify-center items-center my-5  ">
          <h1
            className={
              toggleNav
                ? "text-white lg:text-teal-500 text-3xl font-bold flex"
                : "text-blue-500 lg:text-teal-500 text-3xl font-bold flex"
            }
          >
            LO{" "}
            {toggleNav ? (
              <strong className="">GO</strong>
            ) : (
              <strong className="hidden"></strong>
            )}{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-5 w-full    ">
        <div className="flex justify-start items-center gap-2 cursor-pointer w-full ps-3 rounded-e-3xl hover:bg-teal-500 hover:text-white py-3 ">
          <Link
            to="/form"
            className="text-xl  w-full font-normal  flex justify-start lg:justify-start items-center gap-4"
          >
            <img src={logo} alt="logo de l'application" className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Dashboard</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
        <div className="flex justify-start items-center gap-2 cursor-pointer w-full ps-3 rounded-e-3xl hover:bg-teal-500 hover:text-white py-3 ">
          <Link
            to="/admin/client"
            className="text-xl  w-full font-normal  flex justify-start lg:justify-start items-center gap-4"
          >
            <img src={logo} alt="logo de l'application" className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Client</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
        <div className="flex justify-start items-center gap-2 cursor-pointer w-full ps-3 rounded-e-3xl hover:bg-teal-500 hover:text-white py-3 ">
          <Link
            to="/form"
            className="text-xl  w-full font-normal  flex justify-start lg:justify-start items-center gap-4"
          >
            <img src={logo} alt="logo de l'application" className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Fournisseur</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
        <div className="flex justify-start items-center gap-2 cursor-pointer w-full ps-3 rounded-e-3xl hover:bg-teal-500 hover:text-white py-3 ">
          <Link
            to="/form"
            className="text-xl  w-full font-normal  flex justify-start lg:justify-start items-center gap-4"
          >
            <img src={logo} alt="logo de l'application" className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Commande</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
        <div className="flex justify-start items-center gap-2 cursor-pointer w-full ps-3 rounded-e-3xl hover:bg-teal-500 hover:text-white py-3 ">
          <Link
            to="/form"
            className="text-xl  w-full font-normal  flex justify-start lg:justify-start items-center gap-4"
          >
            <img src={logo} alt="logo de l'application" className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Configuration</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
      </div>
      <div className="flex justify-start px-5 w-full items-center  cursor-pointer bg-red-500 hover:bg-red-700 text-white py-3 ">
        <Link
          to="/form"
          className="text-xl w-fit font-normal flex lg:justify-start justify-center items-center gap-4"
        >
          <img src={logo} alt="logo de l'application" className="w-8 h-8" />
          {toggleNav ? (
            <span className="">Deconexion</span>
          ) : (
            <span className="hidden"></span>
          )}
        </Link>
      </div>
    </div>
  );
}
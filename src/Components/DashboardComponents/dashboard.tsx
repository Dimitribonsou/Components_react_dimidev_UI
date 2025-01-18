import { Link, Route, Routes } from "react-router-dom";
import profil from "./../../assets/profil.png";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowCircleLeft, faReorder, faAslInterpreting, faHome, faPeopleArrows, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import "./dashboard.scss";
import Admin from "../admin";
import Client from "../client";
import DetailProfil from "./DetailProfil";
const Dashboard = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(true);
  const [profilNav, setProfilNav] = useState<boolean>(false);
  const showSideBar = () => {
    const toggle = !toggleNav;
    setToggleNav(toggle);
  };
  const ShowProfil = () => {
    const profil = !profilNav;
    setProfilNav(profil);
  };
  return (
    <div className="flex justify-between w-full  h-screen relative">
      <div
        className={
          toggleNav
            ? "side-bar text-white lg:text-black absolute z-40 bg-teal-500 lg:bg-white  md:relative flex flex-col justify-between gap-3 w-2/3 sm:w-2/5 md:w-2/6 lg:w-1/5 min-w-20 border-2 shadow-md shadown-teal-500 pe-3  h-screen"
            : "side-bar  md:relative flex flex-col justify-between gap-5    w-max min-w-20 border-2 border-teal-500 shadow-md shadown-teal-500 pe-3  h-screen"
        }
      >
        <div className="flex flex-col gap-1">
          {toggleNav ? (
            <div className="flex w-full justify-end items-center md:hidden ">
               <FontAwesomeIcon icon={faReorder} className="w-8 h-8" onClick={showSideBar} />
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          <div className="flex justify-center items-center my-5  ">
            <h1
              className={
                toggleNav
                  ? "text-white lg:text-teal-500 text-3xl font-bold flex"
                  : "text-blue-500  lg:text-teal-500 text-3xl font-bold flex"
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
              <FontAwesomeIcon icon={faHome} className="w-8 h-8" />

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
              <FontAwesomeIcon icon={faPeopleGroup} className="w-8 h-8" />

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
              <FontAwesomeIcon icon={faPeopleArrows} className="w-8 h-8" />
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
              <FontAwesomeIcon icon={faReorder} className="w-8 h-8" />
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
               <FontAwesomeIcon icon={faAslInterpreting} className="w-8 h-8" />
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
            <FontAwesomeIcon icon={faArrowCircleLeft} className="w-8 h-8" />
            {toggleNav ? (
              <span className="">Deconexion</span>
            ) : (
              <span className="hidden"></span>
            )}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-white  w-full relative">
        <div className="flex justify-between items-center bg-white shadow-lg gap-4 p-5 h-20">
          <FontAwesomeIcon icon={faReorder} className="w-7 h-7 cursor-pointer" onClick={showSideBar} />
          <input
            type="search"
            name="recherche"
            id="search"
            placeholder="search here..."
            className="hidden  md:block w-11/12 min-w-52 sm:w-1/3 h-10 outline-none rounded-lg shadow-lg indent-4 border-2  "
          />
          <div
            className="flex flex-col gap-1 justify-center items-center cursor-pointer"
            onClick={ShowProfil}
          >
            <img src={profil} alt="photo de profil" className="h-10 w-10" />
            <span className="font-medium"> Dimidev</span>
          </div>
        </div>
        {profilNav ? <DetailProfil /> : <div className="hidden"></div>}

        <div className="flex flex-col gap-5 overflow-y-scroll lg:overflow-hidden  h-fit ">
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

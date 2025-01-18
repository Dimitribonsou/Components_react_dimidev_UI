import { useEffect, useState } from 'react';
import logo from './../assets/logo.jpeg'
import arrow_list from './../assets/arrow_list.png'
import { Link } from 'react-router-dom';
const Navbar=(props:{state:boolean;})=>{
  // definition des states pour le changes des etats
  const [show,setShow]=useState<boolean>(false);
  const [services,setServices]=useState<boolean>(false);
  // definition des etats de chamgement des elements de la navbar
  const handadleChange=()=>{
    let etatcomposant = !show;
      setShow(etatcomposant);
  }
  const closeWhenClickAnyWay=()=>{
    const state=!show;
    setShow(state);
  }
  useEffect(()=>{
     setShow(false);
  },[props.state])
  // gerer les evenements sur la liste deroulante
  const handleServiceChange=()=>{
    let etatservice=!services
    setServices(etatservice);
    // console.log(" changement de l'etat du composant services .........");
  }
  const handleServiceLeave=()=>{
    setServices(false);
    // console.log(" changement de l'etat du composant services .........");
  }
  return(
    <div className=" relative w-screen" onClick={closeWhenClickAnyWay}>
      <div className="flex justify-between items-center h-30 bg-white sgadow-lg w-screen p-5">
        <div className="flex">
          <img src={logo} alt="logo du site" className='w-20 h-20'/>
        </div>
          <nav className=" hidden md:flex justify-center items-center gap-10 ">
              <Link  to="/" className="text-teal-500  text-base font-bold hover:text-blue-500 hover:border-b-4 p-4  hover:border-blue-500">Home</Link>
              <Link to="/upload-image" className="text-teal-500 text-base  font-bold hover:text-blue-500 hover:border-b-4 p-5  hover:border-blue-500">Send File</Link>
              <Link  to="/all" className="text-teal-500 text-base  font-bold  hover:text-blue-500 hover:border-b-4 p-4  hover:border-blue-500 flex justify-center items-center gap-3" onMouseOver={handleServiceChange} onClick={handleServiceLeave}>Services <img src={arrow_list} className='w-8 h-8' alt='icone de liste deroulante'></img></Link>
              <Link to="/form" className="text-teal-500 text-base  font-bold hover:text-blue-500 hover:border-b-4 p-4  hover:border-blue-500">Contact</Link>
              <Link  to="/faq" className="text-teal-500 text-base  font-bold  hover:text-blue-500 hover:border-b-4 p-4  hover:border-blue-500">FAQ</Link>
          </nav>
          <div className="flex justify-center items-center gap-5">
           <button className=' md:hidden p-2 px-3 bg-blue-500 rounded-lg text-white' onClick={handadleChange}>Menu</button>
              <button className='hidden md:block p-2 px-3 bg-teal-500 rounded-lg text-white'>Contacter</button>
          </div>
      </div>
       {/* block d'affichage des services */}
      {services ?
         <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 w-fitt p-5 text-yellow-500 h-40 bg-teal-100 md:absolute left-1/4 ">
              <span className="text-2xl font-bold">SERVICES1</span>
              <span className="text-2xl font-bold">SERVICES2</span>
              <span className="text-2xl font-bold">SERVICES3</span>
              <span className="text-2xl font-bold">SERVICES4</span>
          </div>
        :
      ''}
      {/* block d'affichage de la navbar pour les petit ecran */}
      { show ? 
          <div className=" flex gap-3 flex-col md:hidden absolute top-24 text-white right-0 h-fit min-w-80  w-1/3 p-5 bg-teal-500 cursor-pointer">
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo du site" className='w-12 h-12'/>
              </div>
                <nav className=" flex flex-col justify-center items-center gap-2 ">
                    <a  href="#" className="text-white  text-base font-bold hover:text-yellow-500  border-b-4 p-4  border-transparent hover:border-yellow-500">Acceuil</a >
                    <a href="#" className="text-white text-base  font-bold hover:text-yellow-500  border-b-4 p-5  border-transparent hover:border-yellow-500">About</a>
                    <a  href="#" className="text-white text-base  font-bold  hover:text-yellow-500  border-b-4 p-4  border-transparent hover:border-yellow-500" >Services</a>
                    <a href="#" className="text-white text-base  font-bold hover:text-yellow-500  border-b-4 p-4  border-transparent hover:border-yellow-500">Contact</a>
                    <a  href="#" className="text-white text-base  font-bold  hover:text-yellow-500  border-b-4 p-4 border-transparent  hover:border-yellow-500">FAQ</a>
                </nav>
                <div className="flex justify-center items-center gap-5 h-fit">
                    <button className='p-2 px-3 bg-yellow-500 rounded-lg text-white'>Contacter</button>
                </div>
           </div>

      :""}
    </div>

  );
}
export default Navbar;
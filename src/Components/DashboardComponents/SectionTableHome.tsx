import profil from './../../assets/profil.png'
const SectionTableHome=()=>{
    return(
        <div className=" w-auto   flex justify-center items-start h-fit gap-5 flex-wrap my-5    px-5 py-5">
        <div className=" w-full  lg:w-3/5 h-80 overflow-scroll lg:overflow-hidden   flex flex-col gap-5  min-w-48 px-5  ">
                <h1 className='font-medium text-2xl'>Ventes recentes</h1>
                <div className="table flex-col justify-between w-full min-w-96">
                    <div className="flex w-full justify-between bg-teal-500 py-3 px-2">
                    
                            <span className="text-center w-1/5 text-white">
                                    Nom
                            </span>
                            <span className="text-center w-1/5 text-white">
                                    Prenom
                            </span>
                            <span className="text-center w-1/5 text-white">
                                    Email
                            </span>
                            <span className="text-center w-1/5 text-white">
                                    Age
                            </span>
                            <span className="text-center w-1/5 text-white">
                                    Telephone
                            </span>
                    </div>
                    <div className=" tr flex w-full hover:bg-blue-400  hover:text-white    justify-between bg-gray-50 py-3 px-2">
                            <span className="text-center w-1/5  ">
                                    kameni
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean@gmail.com
                            </span>
                            <span className="text-center w-1/5 ">
                                    15
                            </span>
                            <span className="text-center w-1/5 ">
                                    674606329
                            </span>
                    </div>
                    <div className=" tr flex w-full hover:bg-blue-400  hover:text-white justify-between bg-gray-50 py-3 px-2">
                            <span className="text-center w-1/5 ">
                                    kameni
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean@gmail.com
                            </span>
                            <span className="text-center w-1/5 ">
                                    15
                            </span>
                            <span className="text-center w-1/5 ">
                                    674606329
                            </span>
                    </div>
                    <div className="tr flex w-full hover:bg-blue-400  hover:text-white justify-between bg-gray-50 py-3 px-2">
                            <span className="text-center w-1/5 ">
                                    kameni
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean@gmail.com
                            </span>
                            <span className="text-center w-1/5 ">
                                    15
                            </span>
                            <span className="text-center w-1/5 ">
                                    674606329
                            </span>
                    </div>
                   
                    <div className="tr flex w-full hover:bg-blue-400  hover:text-white justify-between bg-gray-50 py-3 px-2">
                            <span className="text-center w-1/5 ">
                                    kameni
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean
                            </span>
                            <span className="text-center w-1/5 ">
                                    jean@gmail.com
                            </span>
                            <span className="text-center w-1/5 ">
                                    15
                            </span>
                            <span className="text-center w-1/5 ">
                                    674606329
                            </span>
                    </div>
                </div>
        </div>
        <div className=" w-full lg:w-1/3 h-80 overflow-scroll lg:overflow-hidden   flex flex-col gap-5   px-7">
                <h1 className='font-medium text-2xl'>Connexion recentes</h1>
                <div className=" table  flex-col w-full min-w-96">
                            <div className="tr flex w-full justify-between bg-teal-500 py-3 px-2">
                                    <span className="text-center w-2/3 text-white">
                                            Profil
                                    </span>
                                    <span className="text-center w-1/4  text-white">
                                            Role
                                    </span>
                            </div>
                            <div className="tr flex w-full justify-between hover:bg-blue-400 hover:text-white bg-gray-50 py-3 px-2">
                                      <div className=" flex justify-center gap-2 w-3/5  items-center">
                                          <img src={profil} alt="profil" className='w-8 h-8 rounded-full' />
                                           <span >Dimidev</span>
                                      </div>
                                      <div className="flex justify-center w-2/5">
                                            <span className="text-center font-medium  ">
                                                    Admin
                                            </span>
                                      </div>  
                            </div>
                            <div className="tr flex w-full justify-between hover:bg-blue-400 hover:text-white bg-gray-50 py-3 px-2">
                                      <div className=" flex justify-center gap-2 w-3/5  items-center">
                                          <img src={profil} alt="profil" className='w-8 h-8 rounded-full' />
                                           <span >Dimidev</span>
                                      </div>
                                      <div className="flex justify-center w-2/5">
                                            <span className="text-center font-medium  ">
                                                    Admin
                                            </span>
                                      </div>  
                            </div>
                            <div className="tr flex w-full justify-between hover:bg-blue-400 hover:text-white bg-gray-50 py-3 px-2">
                                      <div className="tr flex justify-center gap-2 w-3/5  items-center">
                                          <img src={profil} alt="profil" className='w-8 h-8 rounded-full' />
                                           <span >Dimidev</span>
                                      </div>
                                      <div className="flex justify-center w-2/5">
                                            <span className="text-center font-medium  ">
                                                    Admin
                                            </span>
                                      </div>  
                            </div>
                            <div className="tr flex w-full justify-between hover:bg-blue-400 hover:text-white bg-gray-50 py-3 px-2">
                                      <div className="tr flex justify-center gap-2 w-3/5  items-center">
                                          <img src={profil} alt="profil" className='w-8 h-8 rounded-full' />
                                           <span >Dimidev</span>
                                      </div>
                                      <div className="flex justify-center w-2/5">
                                            <span className="text-center font-medium  ">
                                                    Admin
                                            </span>
                                      </div>  
                            </div>
                            <div className="tr flex w-full justify-between hover:bg-blue-400 hover:text-white bg-gray-50 py-3 px-2">
                                      <div className="tr flex justify-center gap-2 w-3/5  items-center">
                                          <img src={profil} alt="profil" className='w-8 h-8 rounded-full' />
                                           <span >Dimidev</span>
                                      </div>
                                      <div className="flex justify-center w-2/5">
                                            <span className="text-center font-medium  ">
                                                    Admin
                                            </span>
                                      </div>  
                            </div>
                </div>
               
        </div>
        
    </div>
    );
}
export default SectionTableHome;
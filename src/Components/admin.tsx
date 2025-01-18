import fournisseur from './../assets/Fournisseur.jpeg'
import MyChart from './DashboardComponents/chart';
import SectionTableHome from './DashboardComponents/SectionTableHome';
const Admin = () => {
  return (
    <div className="flex flex-col gap-2 w-full my-6 px-5 ">
        <div className="flex justify-center items-center gap-5 flex-wrap">
            <div className="flex  gap-5 px-2 py-3 justify-center items-center w-4/5 sm:w-1/3 mg:w-1/4 lg:w-1/5 min-w-52 rounded-lg h-32 bg-white shadow-md shadow-teal-300 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2">
                            <span className="font-medium text-2xl">Client</span>
                            <span className="text-3xl font-bold text-teal-500">80</span>
                    </div>
                    <img src={fournisseur} alt="photo du client " className="h-14 w-14" />
            </div>
            <div className="flex  gap-5 px-2 py-3 justify-center items-center w-4/5 sm:w-1/3 mg:w-1/4 lg:w-1/5 min-w-52 rounded-lg h-32 bg-white shadow-md shadow-teal-300 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2">
                            <span className="font-medium text-2xl">Commandes</span>
                            <span className="text-3xl font-bold text-teal-500">50</span>
                    </div>
                    <img src={fournisseur} alt="photo du client " className="h-14 w-14" /> 
            </div>
            <div className="flex  gap-5 px-2 py-3 justify-center items-center w-4/5 sm:w-1/3 mg:w-1/4 lg:w-1/5 min-w-52 rounded-lg h-32 bg-white shadow-md shadow-teal-300 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2">
                            <span className="font-medium text-2xl">Fournisseurs</span>
                            <span className="text-3xl font-bold text-teal-500">30</span>
                    </div>
                    <img src={fournisseur} alt="photo du client " className="h-14 w-14" />
            </div>
            <div className="flex  gap-5 px-2 py-3 justify-center items-center w-4/5 sm:w-1/3 mg:w-1/4 lg:w-1/5 min-w-52 rounded-lg h-32 bg-white shadow-md shadow-teal-300 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2">
                            <span className="font-medium text-2xl">CA</span>
                            <span className="text-3xl font-bold text-teal-500">50 000 </span>
                    </div>
                    <img src={fournisseur} alt="photo du client " className="h-14 w-14" />
            </div>
        </div>
        {/* <div className="my-5 px-5 py-5  w-auto">
            <MyChart/>
        </div> */}
         <SectionTableHome/>
    </div>
  );
};

export default Admin; 
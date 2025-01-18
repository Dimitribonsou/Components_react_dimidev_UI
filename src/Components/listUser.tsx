import { useEffect, useState } from "react";
import data from './data.json'
// Interface contenant les informations utilisateur
interface IUser {
    _id?: object;
    nom: string;
    prenom: string;
    telephone: string;
    age: number;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface IPersonne{
    id:number,
    nom:string,
    prenom:string,
    age:number,
    telephone:string
}
const ListUser = () => {
    // État pour stocker la liste des utilisateurs
    const [userList, setUserList] = useState<IUser[]>([]);
    // Récupérer la liste des utilisateurs au chargement du composant
    useEffect(() => {
        const selectAllUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/users/allUsers', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'}
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Erreur ${response.status}: ${errorData.message || 'Erreur inconnue'} \n erreur détaillée: ${errorData.error}`);
                }
                const data = await response.json();
                setUserList(data);
                console.log("data : "+data); 
            } 
            catch (error) {
                console.error('Erreur:', error);
            }
        };
        selectAllUsers();
    }, []);

    return (
        <div className=" w-screen h-fit bg-teal-500 p-10">
            <h1 className="text-2xl text-white text-center font-bold mb-5 fst-italic text-uppercase">Liste de tous les utilisateurs existants</h1>
            <div className="flex flex-column gap-5 justify-center flex-wrap w-screen ">
                {/* {userList.map((user: IUser) => (
                    <div key={user._id?.toString()} className="w-1/3 h-fit p-5 flex flex-col text-base shadow-lg bg-white cursor-pointer rounded-lg gap-5 hover:scale-105">
                        <h3 className="text-teal-400 font-bold text-2xl">{user.prenom} {user.nom}</h3>
                        <p>Téléphone: <strong>{user.telephone}</strong></p>
                        <p>Âge: <strong className="text-blue-500">{user.age} ans</strong></p>
                    </div>
                ))} */}
                {data.map((user:IPersonne) => (
                    <div key={user.id} className="w-1/3 h-fit p-5 flex flex-col text-base shadow-lg bg-white cursor-pointer rounded-lg gap-5 hover:scale-105">
                        <h3 className="text-teal-400 font-bold text-2xl">{user.prenom} {user.nom}</h3>
                        <p>Téléphone: <strong>{user.telephone}</strong></p>
                        <p>Âge: <strong className="text-blue-500">{user.age} ans</strong></p>
                    </div>
                ))} 
            </div>
        </div>
    );
};

export default ListUser;
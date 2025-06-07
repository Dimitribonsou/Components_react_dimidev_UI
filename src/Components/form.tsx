import  { useState } from 'react';
import fs from 'fs'
const  Form =():any =>{
    // definir les differents useState pour gerer l'etat des differents champs du formaulaire
    const [nom,setNom]=useState<string>('');
    const [id,setId]=useState<number>();
    const [prenom,setPrenom]=useState<string|undefined>();
    const [date_naissance,setDate_naissance]=useState<any|undefined>();
    const [telephone,setTel]=useState<string|undefined>();
    const [age,setAge]=useState<number|undefined>();
    const [num_cni,setNum_cni]=useState<number|undefined>();
    const [file,setFile]=useState< HTMLInputElement>();
    const [errors,setErrors]=useState<{message:string;error:string}>();
    // fonction permettant de recuperer les donnees et de l'envoyer au serveur back-end
       const  fetchData=async()=>{
        // creer un objet json contenant tout les donnees a envoyer au serveur
        const userData = {
            nom: nom.trim(),
            prenom: prenom?.trim(),
            date_naissance: date_naissance ,
            num_cni: num_cni ,
            nom_fichier:file?.name
        };

                try {
                    console.log("nomfichier: "+file?.name)
                    // envoi d'une requete de type post a l'api dont l'url est specifier
                    const response = await fetch('http://localhost:5000/api/users/create', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userData),
                    });
                     // afficher une erreur si le serveur retourne une mauvaise reponse
                    if (!response.ok) {
                        const errorData = await response.json();
                        // modifier la valeur de la variable errors pour afficher les erreurs
                        setErrors(errorData);
                        throw new Error(`Erreur ${response.status}: ${errorData.message || 'Erreur inconnue'} \n erreur detaille: ${errorData.error}`);
                    }
                    // recuperer les donnees retourner par le serveur et afficher le message 'de confirmation
                    const data = await response.json();
                    console.log('Utilisateur ajouté avec succès:', data);
                } catch (error) {
                    // afficher l'erreur en cas d'erreur quelconque
                    console.error('Erreur:', error);
                }
        };
        const AddDataInJsonFile = async () => {
            const data = {
                id: id,
                nom: nom.trim(),
                prenom: prenom?.trim(),
                telephone: telephone?.trim(),
                age: age
            };

            try {
                const response = await fetch('http://localhost:3000/add-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    console.log('Données ajoutées avec succès');
                } else {
                    console.log('Erreur lors de l\'ajout des données');
                }
            } catch (error) {
                console.error('Erreur de réseau:', error);
            }
        };
 return(
     <div className='container-full w-screen h-screen  bg-teal-800 flex justify-center items-center gap-5'>
        <div className='flex justify-start items-start flex-col gap-5 bg-white w-5/6 md:w-1/2 p-10 rounded-lg'>
            <h1 className='text-center w-full fst-italic text-yellow-500 font-semi-bold text-2xl'>Nouveau Utilisateur</h1>
        <span className="text-red-800  text-center content-center w-full h-5">{errors?.message}</span>
            <input type="text" placeholder="Entrer ID de l'utilisateur" value={id}  onChange={(e)=>setId(parseInt(e.target.value))} className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg' required />
            <input type="text" placeholder="Entrer Le nom l'utilisateur" value={nom}  onChange={(e)=>setNom(e.target.value)} className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg' required />
            <input type="text" placeholder='Entrer votre Prenom'value={prenom} onChange={(e)=>setPrenom(e.target.value)} className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg' required />
            {/* // recuperer le fichier image */}
            {/* <input type="file" placeholder='Entrer votre photo'   onChange={(e:any)=>setFile(e.target.files[0])} accept='image/*' className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg'  /> */}
            <input type="tel" placeholder='Entrer numero de telephone' value={telephone} onChange={(e)=>setTel(e.target.value)} className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg' required min={1}/>
            <input type="number" placeholder='Entrer votre age'value={age} onChange={(e)=>setAge(parseInt(e.target.value))} className='border border-1 border-teal-500 w-full outline-none h-10 indent-5 rounded-lg' required />
            <input type="button" value='Enregistrer' onClick={()=> fetchData()} className='border border-1 border-teal-500 bg-teal-800 text-white cursor-pointer w-full outline-none h-10 indent-5 rounded-lg'  />
        </div>
        <a href="http://localhost:3000/download/1736245694419react-removebg-preview.png" download="logo_react.png">
            Télécharger
        </a>
     </div>
  );
  };
  export default Form;
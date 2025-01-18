import { useEffect, useState } from "react";

const ImageUpload= () =>
{
    // definir le state pour gerer l'image
    const [file,setFile]=useState<File>();
          const fetchData= async ()=>{
             try
             {
                const data = new FormData();
                data.append("image", file as File);

                const url = "http://localhost:3000/upload";
                const response = await fetch(url, {
                    method: "POST",
                    body: data
                })
                .then((retour) => console.log("retour serveur : " + retour.text()))
                .catch((err) => console.log("server error : " + err));
                 console.log(data.get("image"));
             }
             catch(err)
             {
                  console.log("Erreur lors de l'envoi du fichier"+err );
             }
          }
   return(
      <div className="container w-96 px-10 py-5 mt-10 m-auto bg-white shadow-md">
         <h3 className="text-center text-teal-500 font-bold my-5"> Soumission de l'image</h3>
         <div className="flex flex-col justify-center items-center gap-7 mt-3">
            <input type="file" accept="image/*" className="w-full border-2 py-2 px-3 border-teal-200" onChange={(e:any)=> setFile(e.target.files[0])} required/>
            <button className="py-2 px-3  bg-teal-500 hover:scale-105 w-full text-white" onClick={fetchData}>Soumetre</button>
         </div>
      </div>
   )
}
export default ImageUpload;

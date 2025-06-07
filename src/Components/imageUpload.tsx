import { useState } from "react";

const ImageUpload = () => {
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);
    const [name, setName] = useState<string>('');

    const fetchData = async () => {
      try {
          const data = new FormData();
          data.append("nom", name);
          if (file1) {
              data.append("document1", file1);
          }
          if (file2) {
              data.append("document2", file2);
          }
  
          console.log("Nom:", name);
          console.log("Document 1:", file1);
          console.log("Document 2:", file2);
  
          const url = "http://localhost:3000/upload";
          const response = await fetch(url, {
              method: "POST",
              body: data
          });
  
          if (response.ok) {
              const result = await response.json();
              console.log("Fichiers envoyés avec succès", result);
          } else {
              const errorResult = await response.json();
              console.log("Erreur lors de l'envoi des fichiers:", errorResult);
          }
      } catch (err) {
          console.log("Erreur lors de l'envoi du fichier:", err);
      }
  };

    return (
        <div className="container w-96 px-10 py-5 mt-10 m-auto bg-white shadow-md">
            <h3 className="text-center text-teal-500 font-bold my-5">Soumission des infos de l'étudiant</h3>
            <div className="flex flex-col justify-start items-start gap-5 mt-3">
                <input
                    type="text"
                    placeholder="Entrer le nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 py-2 px-3 border-teal-200 outline-none"
                />
                <label htmlFor="document1">Envoyer votre premier Diplôme</label>
                <input
                    type="file"
                    accept="application/pdf"
                    className="w-full border-2 py-2 px-3 border-teal-200"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile1(e.target.files ? e.target.files[0] : null)}
                    required
                />
                <label htmlFor="document2">Envoyer votre deuxième Diplôme</label>
                <input
                    type="file"
                    accept="application/pdf"
                    className="w-full border-2 py-2 px-3 border-teal-200"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile2(e.target.files ? e.target.files[0] : null)}
                    required
                />
                <button
                    className="py-2 px-3 bg-teal-500 hover:scale-105 w-full text-white"
                    onClick={fetchData}
                >
                    Soumettre
                </button>
            </div>
        </div>
    );
};

export default ImageUpload;

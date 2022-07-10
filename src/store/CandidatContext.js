import { createContext, useState } from "react";

export const candidatCtx = createContext({
  tabCandidats: [],
  addNewCandidat: () => {},
  removeOneCandidat: () => {},
  getCandidatById: () => {},
  updateCandidat: () => {},
  getAllCandidats: () => {},
});

function AddNewCandidatContextProvider(props) {

  //const [loading, setLoading] = useState(true);

  const [tabCand, setTabCand] = useState([]);
  function addNewCandidat(newCandidat) {
    fetch("/cv/persons", {
      method: "POST",
      body: JSON.stringify(newCandidat),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {

        alert("le candidat est bien ajouté");
      })
      .catch((err) => {
        alert("erreur inconnue");
      });
    setTabCand((prev) => {
      return [...prev, newCandidat];
    });
  }
  function removeOneCandidat(id) {
    fetch(`/cv/persons/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        alert("le candidat est supprimé");
      })
      .catch((err) => {
        alert("erreur inconnue");
      });
 
        getAllCandidats()
  
    ;
  }
  function getCandidatById(id) {
    fetch(`/cv/persons/${id}`, {
      method: "GET",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
    return tabCand.find((c) => c._id === id);
  }
  function getAllCandidats() {
    //setLoading(true);

    fetch("/cv/persons", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        //setLoading(false);

        return res.json();
      })
      .then((data) => setTabCand(data));
  }

  function updateCandidat(id, updatedC) {
    fetch(`/cv/persons/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedC),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        alert("le candidat est modifié");
      })
      .catch((err) => {
        alert("erreur inconnue");
      });

      //ou bien settabcd ...... marra barka
      //kont ketba settabcand(.... settabcand .... )
        getAllCandidats()
    }
  const context = {
    tabCandidats: tabCand,
    addNewCandidat: addNewCandidat,
    removeOneCandidat: removeOneCandidat,
    getCandidatById: getCandidatById,
    updateCandidat: updateCandidat,
    getAllCandidats: getAllCandidats,
  };
  return (
    <candidatCtx.Provider value={context}>
      {props.children}
    </candidatCtx.Provider>
  );
}
export default AddNewCandidatContextProvider;

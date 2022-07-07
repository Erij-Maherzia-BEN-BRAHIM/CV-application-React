import { createContext, useState } from "react";

export const candidatCtx= createContext({
    tabCandidats:[],
    addNewCandidat:()=>{},
    removeOneCandidat:()=>{},
    getCandidatById:()=>{},
    updateCandidat:()=>{}
})
function AddNewCandidatContextProvider(props){
    const[tabCand,setTabCand]= useState([])
    function addNewCandidat(newCandidat){
        setTabCand((prev)=>{
            return [...prev, newCandidat]
        })
   
    }
    function removeOneCandidat(id){
        setTabCand(()=>{
            return tabCand.filter((c)=>c.id !==id)
        })
    }
    function getCandidatById(id){
        
         return   tabCand.find((c)=>c.id ===id)
    
    }
    function updateCandidat(id){
        let candidatToUpdate= tabCand.find((c)=>c.id ===id)
            setTabCand((prev)=>{
                prev.tabCand.map((c)=>{
            return c.id===id? candidatToUpdate:c;
                })
                
            })
    }
    const context={
        tabCandidats:tabCand,
        addNewCandidat:addNewCandidat,
        removeOneCandidat:removeOneCandidat,
        getCandidatById:getCandidatById,
        updateCandidat:updateCandidat
    }
    return (
        <candidatCtx.Provider value={context}>
            {props.children}
        </candidatCtx.Provider>
    )
}
export default AddNewCandidatContextProvider;
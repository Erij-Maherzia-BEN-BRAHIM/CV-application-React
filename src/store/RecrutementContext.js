const { createContext, useState } = require("react");


export const RecrutementContext = createContext(
    {
        recrutes: [],
        nbEmbauches: 0,
        addToEmbauches: () => { },
        removeFromEmbauches: () => { },
        isEmbauche: () => { }
    }
)

function EmbauchesContextProvider(props) {
    const [tabEmbauches, setTabEmbauches] = useState([]);

    function addToEmbauches(c) {
        setTabEmbauches((prev) => {
            return [...prev, c];
        })
    }

    function removeFromEmbauches(id) {
        setTabEmbauches(() => {
            return tabEmbauches.filter((c) => c._id !== id)
        })
    }

    function isEmbauche(id) {
        return tabEmbauches.some((c) => c._id === id)
    }

    const context = {
        recrutes: tabEmbauches,
        nbEmbauches: tabEmbauches.length,
        addToEmbauches: addToEmbauches,
        removeFromEmbauches: removeFromEmbauches,
        isEmbauche: isEmbauche
    }

    return (
        <RecrutementContext.Provider value={context}>
            {props.children}
        </RecrutementContext.Provider>
    )
}

export default EmbauchesContextProvider
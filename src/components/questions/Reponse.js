const Reponse = ({reponse}) => { //props = {todos: [{}, {}]}
    return (
        <div>
            <p className="buttonreponse">{reponse.nomAuteur} :
             {reponse.libelle}</p>
        </div>
    )
}

export default Reponse;
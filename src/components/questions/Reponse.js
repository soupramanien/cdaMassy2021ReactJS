const Reponse = ({reponse}) => { //props = {todos: [{}, {}]}
    return (
        <div className="buttonreponse">
            <div className="nomAuteurReponse">{reponse.nomAuteur}:</div>
            <div className="libelleReponse">{reponse.libelle}</div>
        </div>
    )
}
export default Reponse;
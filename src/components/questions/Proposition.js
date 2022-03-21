const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    return (
        <div>
            <p>{proposition.idProposition}</p>
            <p>{proposition.libelle}</p>
        </div>
    )
}

export default Proposition;
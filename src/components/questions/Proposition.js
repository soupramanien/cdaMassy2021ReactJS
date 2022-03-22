const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    return (
        <div>
            <button className="buttonstyle">{proposition.libelle}</button>
        </div>
    )
}

export default Proposition;
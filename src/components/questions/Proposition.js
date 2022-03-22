const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    return (
        <div>
            <button class="buttonstyle">{proposition.libelle}</button>
        </div>
    )
}

export default Proposition;
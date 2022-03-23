const Proposition = ({proposition}) => { //props = {todos: [{}, {}]}
    function postQuestion(){
        alert(proposition.libelle);
    }
    return (
        <div>
            <button className="buttonstyle" onClick={postQuestion} >{proposition.libelle}</button>
        </div>
    )
}
export default Proposition;
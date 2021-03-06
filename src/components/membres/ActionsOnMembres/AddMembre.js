import {useSelector,useDispatch} from "react-redux";
import { actionCreators } from "../../../redux/store";
import {useState} from "react"
import Membres from "../Membres";

    function AddMembre(props){
        let proposition = useSelector(state => state.propositionMembre.membre)
        const [nomPersonne, setNomPersonne] = useState("")
        const dispatch = useDispatch()
    

        const onChangePersonne=(nomPersonne)=>{

            const nom = nomPersonne.target.value
            dispatch(actionCreators.proposeMembre(nom))
            let suggestion =''
            if(nom!=0){    
                proposition.forEach(item=> suggestion+=`<div>${item.nom}</div>`);
            }
            document.getElementById("suggestions").innerHTML=suggestion
            
        }
        
    
        // const OnAddMembre = () => {
        //     // event.preventDefault();
        //     //desactive l'action par defaut du navigateur
        //     const membreCanal={
        //         idCanal: props.idCanal,
        //         idMembre: idPersonne
        //     }
        //     dispatch(actionCreators.addMembre(membreCanal))
            
        
        // }
        return (
            <div>
                
                <input type="text" onChange={onChangePersonne}/>
                {/* <input type="submit" onClick={OnAddMembre}/> */}
                
                <div id="suggestions"></div>
     
            </div>
        )
        const container= StyleSheet
}
export default AddMembre;


import React, { useEffect } from "react";
import Canal from "./Canal";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/store";
import { useSelector } from "react-redux";

function Canaux(props) {
    //id de l'utilisateur login, en dur pour le moment
    const currentUserId = 4;
    //recuperer dispatch et canal dans l'initState
    const dispatch = useDispatch();
    const canaux = useSelector(state => state.canal.canaux);
    //fonctuon pour recuperer le canal aupres Java
    const loadCanaux = async () => {
        try {
            const url = "";
            const res = await fetch("http://localhost:8080/cdamassy2021/api/canaux/" + currentUserId);
            const newCanaux = await res.json();
            dispatch(actionCreators.loadCanaux(newCanaux))
        } catch (error) {
            alert("Network Error")
            console.log(error);
        }
    }

    //lancer loadCanaux
    useEffect(() => {
        loadCanaux();
    }, []);

    return (
        <div>
            <h1> Liste des canaux </h1>
            {canaux.map((canal) => {
                return <Canal key={canal.idCanal} canal={canal} />
            })}
        </div>
    )
}
export default Canaux;
async function getEFG(idEFG){

    fetch("http://localhost:8080/cdamassy2021/canaux/1/EFGs/"+idEFG)
    .then(response=>response.json())
    .catch(error=>error)

}

export default getEFG;
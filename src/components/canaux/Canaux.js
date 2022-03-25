import React from "react";
import Canal from "./Canal";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/store";
import { useSelector } from "react-redux";

function Canaux() {
    const canaux = useSelector(state => state.canal.canaux);

    //solution 1
    // useEffect(() => {
    //     loadUsers();
    //     (async () => {
    //       const user = await AsyncStorage.getItem("current_user")
    //       Alert.alert(JSON.parse(user).username);
    
    //     })()
    //   }, []);
    //   return loading ? (
    //     <View style={[styles.container, styles.horizontal]}>
    //       <ActivityIndicator />
    //     </View>) : (
    //     <FlatList
    //       data={users}
    //       keyExtractor={user => String(user.id)}
    //       renderItem={({ item }) => (
    //         <UserListItem user={item} />
    //       )}
    //       refreshing={loading}
    //       onRefresh={loadUsers}
    //     />
    //   )
    // }

    //solution 2
    // getCanaux = async (idLogin) =>{
    //     let data = await fetch("http://localhost:8080/cdamassy2021/api/canaux/" + idLogin);
    //     let product = await data.json();
    //     this.setState({
    //         product : product
    //     })

    //solution 3
    // componentDidMount() {
    //     const idLogin = 1;
    //     const getCanaux = (idLogin) => {
    //         let promesse = fetch("http://localhost:8080/cdamassy2021/api/canaux/" + idLogin,
    //             { method: "GET" })
    //         promesse
    //             .then((data) => {
    //                 if (data.status === 200) {
    //                     return data.json()
    //                 }
    //                 alert("echec de recuperation de memebres !")
    //                 return [];
    //             })
    //             .then((canaux) => {
    //                 canaux = canaux
    //             })
    //     }
    // }


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
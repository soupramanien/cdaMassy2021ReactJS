export default class EFGServices {
	static getAllEFGs(props, idCanal) {
		fetch(`http://localhost:8080/cdamassy2021/api/${idCanal}/EFGs`)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}

	static getEFG(props, idEFG) {
		fetch(`http://localhost:8080/cdamassy2021/api/1/EFGs/${idEFG}`)
			.then((response) => response.json())
			.then((data) => {
				props(data);
			})
			.catch((error) => error);
	}
}

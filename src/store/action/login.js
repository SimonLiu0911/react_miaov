import HTTP from "./http";

function login(data){
	return function(dispatch){
		return HTTP.post("/user/login",data).then(response => {
			if(response.data.code === 0) {
				dispatch({
					type: "LOGIN",
					user: data.username
				});
			}
			return response.data;
		});
	};
}

export default login;
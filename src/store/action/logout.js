import HTTP from "./http";

function loginOut(){
	return function(dispatch) {
		return HTTP.post("/user/logout").then(response => {
			if(response.data.code === 0){
				dispatch({
					type: "LOGOUT"
				});
			}
		})
	}
}

export default loginOut;
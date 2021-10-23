import HTTP from "./http";

function isLogin(data){
	return function(dispatch) {
		return HTTP.post("/user/islogin").then(response => {
				if(response.data.code === 0) {
					dispatch({
						type: "LOGIN",
						user: response.data.username
					});
				}
			})
		}
}

export default  isLogin;
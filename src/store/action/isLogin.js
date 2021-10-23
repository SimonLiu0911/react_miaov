import HTTP from "./http";

// 確認登錄狀態
function isLogin(){
	return function(dispatch) {
		return HTTP.post("/user/islogin").then(response => {
            /**
             * 0: 已登入
             * 1: 未登入
             */
            if(response.data.code === 0) {
                dispatch({
                    type: "LOGIN",
                    user: response.data.username
                });
            }
        });
    };
}

export default  isLogin;
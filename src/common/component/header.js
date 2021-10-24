import React,{ useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";

// Hook
import { useBack } from "../hook/index";

import isLogin from "../../store/action/isLogin"; 
import logout from "../../store/action/logout";

function Header(props) {
	const back = useBack(props.history);
	const path = props.location.pathname;
	const { user, changeShow } =  props;
	const [ isBtnShow, setBtnShow ] = useState(false);

	useEffect(() => { // 在第一次渲染時確認有沒有登入
		props.dispatch(isLogin());
	},[]);

	function getUser() {
		if(path === "/login") {
			return ""
		}
		if(user) { // 有登入的話會執行
			return (
				<span className="header-btn-right">
					<span 
						className="header-user"
						onClick = {() => {
							setBtnShow(!isBtnShow); // 點擊後出現/隱藏“退出”按鈕
						}}
					>
						{user}
					</span>
					<span 
						className="header-logout-btn"
						style={{
							display:isBtnShow?"block":"none"
						}} 
						onClick={() => {
							props.dispatch(logout());
						}}
					>
						退出
					</span>
				</span>
			);
		}
		return <Link className="user" to="/login" />;
	}
	
	return (
		<header id="header">
			<nav className="menu">
				{/* 返回按钮 */}
				{path === "/login"?
					<a
						className="header-btn-left iconfont icon-back"
						href="/#"
						onClick={(e) => {
                            e.preventDefault();
							back();
						}}  
					></a>
					:
					<a 
						className="header-btn-left iconfont icon-hycaidan"
						href="/#"
						onClick={(e) => {
                            e.preventDefault();
							changeShow();
						}}
					></a>
				}
			</nav>
			<h1 className="logo">miaov.com</h1>
			{getUser()}
		</header>
	);
}

export default connect(state => {
	return {
		user: state.getUser
	};
})(withRouter(Header)); // 用withRouter取得路由狀態(props.history)
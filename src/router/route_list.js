import React from 'react';

import Index from "../view/index/index"
import Course from '../view/course/index';
import Lecturer from '../view/lecturer/index';
import Work from '../view/work/index';
import Login from '../view/login/index';

const routeList = [
	{
		name: "首頁",
		path: "/",
		exact: true,
		render(props){
			return <Index {...props}/>
		}
	},{
		name: "課程安排",
		path: "/course",
		exact: true,
		render(props){
			return <Course {...props} />
		}
	},{
		name: "講師團隊",
		path: "/lecturer",
		exact: true,
		render(props){
			return <Lecturer {...props} />
		}
	},{
		name: "作品詳情",
		path: "/work/:id",
		exact: true,
		render(props){
			return <Work {...props} />
		}
	},{
		name: "登錄註冊",
		path: "/login",
		exact: true,
		render(props){
			return <Login {...props} />
		}
	}
];

const nav = [
	{
		name: "首頁",
		path: "/",
		exact: true,
		className: "iconfont icon-home"
	},{
		name: "課程安排",
		path: "/course",
		exact: true,
		className: "iconfont icon-kecheng"
	},{
		name: "講師團隊",
		path: "/lecturer",
		exact: true,
		className: "iconfont icon-peixunjiangshi"
	}
];

export {
    routeList,
    nav
};
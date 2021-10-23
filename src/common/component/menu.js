import React from 'react';
import { NavLink } from "react-router-dom";
import { nav } from "../../router/route_list";

function Menu(props){
	return (
		<nav id="menu">
			{nav.map((item,index) => {
				return (
					<NavLink 
						className={item.className}
						to={item.path}
						key={index}
						exact={true}
						// activeClassName={"active"}
						onTouchEnd={props.menuHide}
					>
						{item.name}
					</NavLink>
				)
			})}
		</nav>
	);
}

export default Menu;
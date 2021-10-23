import React from 'react';
import { Link } from "react-router-dom";

function Works(props){
	let {data, loadEnd, loading} = props;
	return (
		<div className="works">
			<h3>學員作品</h3>
			<ul className="works_list clearfix">
				{
					data.map(item => (
						<li key={item.id}>
							<Link to={"/work/" + item.id}>
								<img src={item.icon} className="work_a" alt="" />
								<span className="wrork_txt clearfix work_a">
									<strong className="work_a">{item.title}</strong>
									<span className="work_a">
										<em className="work_a">{item.message}</em>
										<em className="work_a">{item.good}</em>
									</span>
								</span>
							</Link>
						</li>
					))
				}
			</ul>
			<a className="more" href="/#">
				{
					loadEnd ? "沒有新的數據了" : (loading ? "正在加載中" : "上滑加載更多")
				}
			</a>
		</div>
	);
};

export default Works;
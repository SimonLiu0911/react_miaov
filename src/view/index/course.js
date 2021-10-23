import React from 'react';

function Course() {
	return (
	<ul className="content_list clearfix">
		<li className="pop_li">
			<button className="popular">Popular</button>
			<h3 className="list_title">
				VIP自學陣營
				<span>A聯盟-HTML&amp;CSS</span> 
			</h3>
			<p className="price">FREE</p>
			<div className="txt">
				<p>以免費公開課的形式，解決你在學習中遇到的問題。</p>
				<a href="/#" className="signUp">報名</a>
			</div>
		</li>
		<li className="month_li">
			<h3 className="list_title">
				WEB前端開發
				<br />
				零基礎課程
			</h3>
			<p className="price">￥4800</p>
			<div className="txt">
				<time>2個月</time>
				<p>
					PC端靜態頁面，移動商靜態頁面製作...
				</p>
				<a href="/#" className="signUp">報名</a>
			</div>
		</li>
		<li className="month_li">
			<h3 className="list_title">
				WEB前端開發
				<br />
				零基礎課程
			</h3>
			<p className="price">￥9200</p>
			<div className="txt">
				<time>4個月</time>
				<p>
					作用域、閉包、原型鏈、核心算法...
				</p>
				<a href="/#" className="signUp">報名</a>
			</div>
		</li>
		<li className="pop_li">
			<button className="popular">Popular</button>
			<h3 className="list_title">
                VIP自學陣營
                <span>B聯盟-JavaScript</span>
            </h3>
            <p className="price">FREE</p>
            <div className="txt">
                <p>
					以免費公開課的形式，解決你在學習中遇到的問題。
				</p>
                <a href="/#" className="signUp">報名</a>
            </div>
		</li>
	</ul>
	);
};

export default Course;
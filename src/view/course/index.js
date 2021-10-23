import React from 'react';
import Frame from '../../common/component/frame';
import "../../common/css/class.css";

function Course() {
	return (
		<Frame>
			<div className="class_box">
				<h2>
					<span>一周學習安排</span>
				</h2>
				<table className="timetable">
					<thead>
						<tr>
							<th>星期</th>
							<th>時間</th>
							<th>學習內容</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="week1" rowSpan="2">週一</td>
							<td className="center">上午</td>
							<td className="content_td">前端代碼初識</td>
						</tr>
						<tr>
							<td className="center">下午</td>
							<td className="content_td">基本屬性：背景，邊框</td>
						</tr>
						<tr>
							<td className="week2" rowSpan="2">週二</td>
							<td className="center">上午</td>
							<td className="content_td">H5標籤與css選擇器</td>
						</tr>
						<tr>
							<td className="center">下午</td>
							<td className="content_td">練習題</td>
						</tr>
						<tr>
							<td className="week3" rowSpan="2">週三</td>
							<td className="center">上午</td>
							<td className="content_td">浮動的深度剖析</td>
						</tr>
						<tr>
							<td className="center">下午</td>
							<td className="content_td">定位進階</td>
						</tr>
						<tr>
							<td className="week4" rowSpan="2">週四</td>
							<td className="center">上午</td>
							<td className="content_td">表單詳解</td>
						</tr>
						<tr>
							<td className="center">下午</td>
							<td className="content_td">表單的相關屬性</td>
						</tr>
						<tr className="single">
							<td className="center week5">週五</td>
							<td className="center">全天</td>
							<td className="content_td">瀏覽器兼容性</td>
						</tr>
						<tr className="single">
							<td className="center week6">週末</td>
							<td className="center" colSpan="2">合理安排自己的時間，記得做聯繫哦！</td>
						</tr>
					</tbody>
				</table>
				<p className="more_message">
					更詳情的課程安排請點擊：
					<a href="/#">www.miaov.com</a>
				</p>
			</div>
			<footer id="footer">
				<div className="link clearfix">
					<a href="/#">hr_recruit@miaov.com</a>
					<a href="/#">010-57269690</a>
				</div>
				<nav className="foot_nav clearfix">
					<a href="/#">網站首頁</a>
					<a href="/#">課程安排</a>
					<a href="/#">學員作品</a>
					<a href="/#">視頻教程</a>
					<a href="/#">關於我們</a>
					<a href="/#">在線留言</a>
					<a href="/#">常見問題</a>
				</nav>
				<p className="copyright">京ICP備08102442號-1 2007-2016 MIAOOV.COM 版權所有</p>
			</footer>
		</Frame >
	);
}

export default Course;
import React,{ useEffect, useRef, useState } from 'react';
import BScroll from "better-scroll";

function Tab(props){
	let { data, render } = props;
	let bannerWrap = useRef(null);
	let [now,setNow] = useState(0); 
	let bScroll = null;

	useEffect(() => {
		let timer = 0;
		bScroll = new BScroll(bannerWrap.current, {
			scrollX: true, // 當設置為true的時候可以橫向滾動
			scrollY: false, // 當設置為true的時候可以縱向滾動
			eventPassthrough: "vertical",
			momentum: false, // 當快速在屏幕上滑動一段距離的時候，會根據滑動的距離和時間計算出動量，並生成滾動動畫。設置為 true 則開啟動畫。
			snap:{
				loop: true
			}
		});
		bScroll.on("scrollEnd", () => { // 滾動結束時觸發
			setNow(bScroll.getCurrentPage().pageX);
		});
		timer = setInterval(() => {
			bScroll.next(200);
		},2000);
		bannerWrap.current.addEventListener("touchstart",() => {
			clearInterval(timer);
		});
		bannerWrap.current.addEventListener("touchend",() => {
			timer = setInterval(() => {
				bScroll.next(200)
			},2000);
		})
		return () => {
			clearInterval(timer);
		}
	},[]);

	return (
		<div className="banner">
			<div className="banner_img" ref={bannerWrap}>
				<ul className="banner_list clearfix">
					{/* 輪播圖片 */}
					{
						data.map((item,index)=><li key={index}>{render(item)}</li>)
					}
				</ul>
			</div>
			{/* 輪播圖片的分頁 */}
			{
				data.length < 1 ? "" : (
					<ul className="banner_nav">
						{
							data.map((item, index)=><li key={index} className={index === now ? "active" : ""}></li>)
						}
					</ul>
				)
			}
		</div>
	);
}

export default Tab;
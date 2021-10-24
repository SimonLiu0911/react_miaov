import React,{useEffect,useRef} from 'react';
import BScroll from "better-scroll";

function LecturerAlert(props){
	let {data, hideAlert} =  props;
	let wrap = useRef(null);
	let point = {};

	useEffect(() => {
		let bscroll = new BScroll(wrap.current,{
			scrollbar: true
		});
	},[]);

	return (
		<aside 
			className="elastic"
			onTouchStart={() => {
				hideAlert();
			}}
		>
			<div 
				className="elastic_box"
				onTouchStart={(e) => {
					e.stopPropagation();
				}}
			>
				<span 
					className="close"
					onTouchStart={(e) => {
						let touch = e.changedTouches[0];
						point.x = touch.pageX;
						point.y = touch.pageY;
					}}
					onTouchEnd={(e) => {
						let touch = e.changedTouches[0];
						let nowPoint = {
							x: touch.pageX,
							y: touch.pageY
						};
						if(Math.abs(nowPoint.x - point.x) < 5 && Math.abs(nowPoint.y - point.y) < 5) {
							hideAlert();
						}
					}}
				>
					關閉
				</span>
				<div className="elastic_img">
					<img src={data.icon} alt="" />
				</div>
				<div className="elastic_txt">
					<h3>{data.title}-妙味課堂 全職講師</h3>
					<div className="elastic_content" ref={wrap}>
						<div
						dangerouslySetInnerHTML={{
							__html: data.content
						}}  
						></div>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default LecturerAlert;
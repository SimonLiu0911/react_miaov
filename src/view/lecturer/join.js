import React,{ useRef, useEffect } from 'react';
function Join(){
    const list = useRef(null);
    
    useEffect(() => {
        let lis = list.current.querySelectorAll("li");
        lis.forEach(item => {
            item.addEventListener("touchstart",() => {
                item.classList.add("active");
            });
            item.addEventListener("touchend",() => {
                item.classList.remove("active");
            });
        });
    })
    return (
        <div className="teacher_index">
            <h2>加入我們</h2>
            <ul className="teacher_list clearfix" ref={list}>
                <li>  
                    <div className="message_li">
                        <h3>web講師</h3>
                        <p>人數：人數不限，多多益善</p>
                        <p>薪資：面議</p>
                    </div>
                </li>     
                <li>
                    <div className="message_li">
                        <h3>課程顧問</h3>
                        <p>人數：3人</p>
                        <p>薪資：底薪+提成</p>
                    </div>
                </li>
                <li>
                    <div className="message_li">
                        <h3>客服</h3>
                        <p>人數：3人</p>
                        <p>薪資：面議</p>
                    </div>
                </li>
                <li>
                    <div className="message_li">
                        <h3>行政前台助理</h3>
                        <p>人數：3人</p>
                        <p>薪資：底薪+提成</p>
                    </div>
                </li>
            </ul>
            <div className="welcome clearfix">
                <div className="welcome_photo">
                    <img src={require("../../common/images/xiaole.png")} alt="" />  
                </div>
                <p>歡迎大家來到妙味課堂，在這裡，公司文化輕鬆包容，且呈多元化發展傾向，職位晉級標準清晰量化，雖有上下級職稱、卻無論資排輩陋習……
                    <span>本招聘信息長期有效</span>
                </p>
            </div>
        </div>
    )
}

export default Join;
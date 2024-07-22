import React, { useState } from "react";
import bannerImg from "../../../assets/banner.jpg";
import bride from "../../../assets/bride.jpg";
import groom from "../../../assets/groom.jpg";
import content1 from "../../../assets/content1.jpg";
import content11 from "../../../assets/content11.jpg";
import content22 from "../../../assets/content22.jpg";
import "./Home.scss";
import { month } from "../../../utils/date";
function Home() {

  return (
    <div className="container">
    <section className="banner">
        <div className="banner__image">
              <img srcSet={`${bannerImg} 2x`} alt="" />
        </div>
        <div className="banner__content">
             <p>Tú <span>Martinez</span> </p>
             <p>SAVE OUR DATE</p>
             <p>20.06.2024</p>
        </div>
    </section>
    <div className="content">
      <div className="content__contentTop">
        <p>"Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà hai người cùng nhau xây dựng và phát triển."</p>
      </div>

      <div className="content__bride">
        <div className="image">
        <img src={bride} alt="" />
        </div>
        <div className="content">
        <p>CÔ DÂU</p>
        <p>Hà Thanh Nhã</p>
        <p>
         Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự  Bộ phim lần này chính là sự
        </p>
        </div>
      </div>

      <div className="content__groom"> 
        <div className="content">
        <p>CHÚ RỂ</p>
        <p>Dương Văn Tú</p>
        <p>
         Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự Bộ phim lần này chính là sự  Bộ phim lần này chính là sự
        </p>
        </div>

        <div className="image">
        <img src={groom} alt="" />
        </div>
      </div>

      <div className="content__contentFirst">
        <p></p>
        <p>Thân mời</p>
        <p> ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH</p>

        <div className="image">
          <img src={content1} alt="" />
          <img src={content11} alt="" />
          <img src={content22} alt="" />
        </div>
      </div>

      <div className="content__contentSecond">
        <p>Tháng 4</p>
        <table>
          <thead>
            <td>MON</td>
            <td>TUE</td>
            <td>WED</td>
            <td>THUR</td>
            <td>FRI</td>
            <td>SAT</td>
            <td>SUN</td>
            </thead>
            {month?.map((week)=>{
              return (
                <tbody>
                <td>{week.mon}</td>
                <td>{week.tue}</td>
                <td>{week.wed}</td>
                <td>{week.thur}</td>
                <td>{week.fri}</td>
                <td>{week.sat}</td>
                <td>{week.sun}</td>
                </tbody>
              )
            })}
        </table>
      </div>



      <div className="content__contentThird">
              <p>TIỆC THÂN MẬT NHÀ GÁI ĐƯỢC TỔ CHỨC VÀO LÚC 12 GIỜ 00 PHÚT</p>


      </div>
      <div className="content__contentFifth  "></div>
      <div className="content__contentSixth "></div>

      {/* <div className="content__invitation">
        <button>GỬI LỜI NHẮN</button>
        <button>XÁC NHẬN THAM DỰ</button>
        <button>MỪNG CƯỚI</button>
        <p>Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của tụi mình. </p>
      </div> */}
{/*       
      <div className="content__countDown">
      content__countDown
      </div> */}
    </div>
    <section> 
    </section>
    </div>
  );
}
export default Home;

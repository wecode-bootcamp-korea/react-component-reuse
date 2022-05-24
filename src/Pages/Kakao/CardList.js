import React from "react";
import "./CardList.scss";

/**********************************************************
  
  현재는 카드 뷰 / 리스트 뷰가 구현되어있지만,
  중복되는 구조가 반복되어서 코드가 불필요하게 길어진 것을 확인 할 수 있습니다.
  
  오늘 배운 컴포넌트 재사용 개념을 활용해 반복되는 구조를 컴포넌트화 하고
  props에 따라서 다른 UI를 보여줄 수 있도록 구현해 주세요!

  - props로 전달할 데이터를 mock data 혹은 데이터를 담고 있는
    js파일을 생성해서 관리해 주세요!
  - 컴포넌트를 분리하면 그에 따라 css도 분리해주세요!

***********************************************************/

const CardList = () => {
  return (
    <div className="cardList">
      <article className="card">
        <div className="cardImg">
          <img
            alt="cardImg"
            src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201103134054_kr.jpg?type=thumb&opt=R329x247@2xa"
          />
        </div>
        <div className="cardMain">
          <div className="status">
            <span className="new">NEW</span>
          </div>
          <h3>촉촉함을 원해요</h3>
          <div>
            <p>
              재채기는 콜록 콜록 눈,코,입 모두 간질 간질. 이게 다 건조함
              때문이라구! 건조함을 해결하러 온 꿀꿀꿀귀탱 가습기들,
              구경해볼까요?
            </p>
          </div>
        </div>
      </article>
      <article className="card">
        <div className="cardImg">
          <img
            alt="cardImg"
            src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
          />
        </div>
        <div className="cardMain">
          <div className="status">
            <span className="good">Good</span>
          </div>
          <h3>통통미 폭발 구름 폭신 필로우</h3>
          <div>
            <p>
              통통하고 말랑 말랑한 너희에게 내 하루 시작과 끝에서 힐링을 부탁해!
            </p>
          </div>
          <ul>
            <li className="item list">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_라이언</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
            <li className="item list">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152804391_8809721505915_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_어피치</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
            <li className="item list">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_무지</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
          </ul>
        </div>
      </article>
      <article className="card">
        <div className="cardImg">
          <img
            alt="cardImg"
            src="https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201111183631_kr.jpg?type=thumb&opt=R335x187@2xa"
          />
        </div>
        <div className="cardMain">
          <div className="status">
            <span className="theme">Theme</span>
          </div>
          <h3>올 겨울엔 프렌즈랑 메리 화이트 크리스마스!</h3>
          <div>
            <p>
              올해 크리스마스엔 눈이 올까요? 안오면 어때요. 이미 프렌즈들이 내
              마음에 하얀 눈을 내려주고 있는걸!
            </p>
          </div>
          <ul>
            <li className="item card">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152815054_8809721505908_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_라이언</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
            <li className="item card">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152804391_8809721505915_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_어피치</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
            <li className="item card">
              <img
                alt="item"
                src="https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa"
              />
              <div className="content">
                <div>
                  <p>구름폭신필로우_무지</p>
                  <p className="price">39,000원</p>
                </div>
                <button className="button" />
              </div>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default CardList;

import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Detail from "../Detail";
import { photoarr } from "../photos";
import Review from "../Review";
import { postWishItem, deleteWishItem } from "../../api";

const ItemContainer = styled.li`
  display: flex;
  margin: 3vh 0px;
  align-items: center;
  border: 1px solid #f1c644;
  border-radius: 15px;
  background-color: white;
  position: relative;
  & img {
    margin: 1.5vh;
  }

  & > i {
    position: absolute;
    top: 20px;
    left: 120px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
`;
const LinkContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 3vw;
  flex-direction: column;
  justify-content: space-between;
  & .ui.button {
    margin: 0.5vh 0px;
  }
`;
const Text = styled.text`
  margin-right: 8px;
`;

const DetailButton = styled(Button)`
  &.ui.button {
    background-color: #e6edff;
    border: solid #496ace;
    color: #496ace;
  }
`;
const ReviewButton = styled(Button)`
  &.ui.button {
    background-color: #eeeeff;
    border: solid #706ee9;
    color: #706ee9;
  }
`;

const CompareButton = styled(Button)`
  &.ui.button {
    background-color: #ffdaec;
    border: solid #e9539b;
    color: #e9539b;
  }
`;

const SearchItem = ({
  nursingHome_id,
  img,
  name,
  type,
  grade,
  score,
  reviewNum,
  addrSiDo,
  addrSiGunGu,
  addrRoad,
  buildingMainNum,
  phoneNumber,
  wish,
  onAdd,
  onEditWish,
  isWishPage,
  onRemoveWish,
  setBarOpen,
}) => {
  const itemRef = useRef(null);
  console.log("searchItem rendering");
  const [detail_bool, setDetail_bool] = useState(false); //상세정보 페이지 열려있는지 여부
  const [review_bool, setReview_bool] = useState(false); //리뷰페이지 열려있는지 여부
  const [detailData, setDetailData] = useState({
    nursingHome_id: 123, // 요양원 id
    name: "서울요양시설", // 요양원이름
    addrSiDo: 11, //시도코드
    addrSiGunGu: 500, // 시군구코드
    addrDong: 500, // 법정동코드
    addrRi: 123, // 리코드
    addrRoad: "서울시 상도로 22길", // 도로명주소
    addrDetail: "4층", // 상세주소
    phoneNumber: "010-1234-4567", // 전화번호
    headCount: 40, // 정원
    nowCount: 35, // 현원
    waitingCount: 23, // 대기
    doctor: 10, // 의사 수
    nurse: 13, // 간호사 수
    careGiver: 5, // 요양보호사 수
    singleRoom: 12, // 1인실
    doubleRoom: 21, // 2인실
    tripleRoom: 13, // 3인실
    quadrupleRoom: 12, // 4인실
    programRoom: 1, // 프로그램실
    trainingRoom: 1, // 작업 및 일상동작 훈련실
    cost: 210000, // 비용
    reviews: [
      {
        review_id: "abd", // 리뷰 id
        member_id: "vcdc", // 사용자 id
        nursingHome_id: "sdafasdf", // 요양원 id
        text: "별로예요!", // 리뷰
        score: 4, // 평점
        date: "2022.07.21", // 작성 날짜
      },
    ],
    // word 키워드 추가 예정
  });

  const handleOnClick = () => {
    onEditWish(nursingHome_id, !wish);
    postWishItem(nursingHome_id);
  };

  const handleOnAdd = () => {
    onAdd(nursingHome_id, name);
    setBarOpen(true);
    itemRef.current.style = "border: solid 3px #496ACE";
  };

  const handleRemoveWish = () => {
    if (window.confirm(`${name}을 위시리스트에서 삭제하시겠습니까?`)) {
      onRemoveWish(nursingHome_id);
      window.scrollTo(0, 0);
      deleteWishItem("user12", nursingHome_id, "ho");
    }
  };
  useEffect(() => {
    fetch(
      `https://api.care-yojung.com/search/detail?id=${nursingHome_id}&service=aaa`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setDetailData(res);
      });
  }, [detail_bool]);

  function getStar(num) {
    const starArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < num; i++) {
      starArr[i] = 1;
    }
    const result = [];
    starArr.forEach((i) => {
      if (i === 1)
        result.push(<Icon key={i} size="large" name="star" color="yellow" />);
      else result.push(<Icon key={i} size="large" name="star" color="grey" />);
    });
    return result;
  }

  return (
    <ItemContainer ref={itemRef}>
      <img
        onClick={() => {
          setDetail_bool(true);
        }}
        style={{ width: "150px", height: "150px", cursor: "pointer" }}
        src={photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY}
        alt="요양원 사진"
      />
      {isWishPage ? (
        wish ? (
          <Icon
            name="heart"
            color="red"
            size="large"
            onClick={(event) => {
              event.stopPropagation(); // onclick이벤트를 가지고 있는 블럭이 겹쳐잇을때 제일 위에 하나만 실행 되게 해줌.
              handleRemoveWish();
            }}
          ></Icon>
        ) : (
          <Icon
            name="heart outline"
            size="large"
            onClick={(event) => {
              event.stopPropagation();
              handleOnClick();
            }}
          ></Icon>
        )
      ) : wish ? (
        <Icon
          name="heart"
          color="red"
          size="large"
          onClick={(event) => {
            event.stopPropagation();
            handleOnClick();
          }}
        ></Icon>
      ) : (
        <Icon
          name="heart outline"
          size="large"
          onClick={(event) => {
            event.stopPropagation();
            handleOnClick();
          }}
        ></Icon>
      )}
      <InfoContainer
        onClick={() => {
          setDetail_bool(true);
        }}
        style={{ cursor: "pointer" }}
      >
        <div>
          <Text>{name}</Text>
          <Text>{type}</Text>
          <Text>{grade}</Text>
        </div>
        <div>
          <div>{getStar(score)}</div>
          <span>{reviewNum}</span>
        </div>
        <div>
          <Text>{addrSiDo}</Text>
          <Text>{addrSiGunGu}</Text>
          <Text>{addrRoad}</Text>
          <Text>{buildingMainNum}</Text>
        </div>
        <div>{phoneNumber}</div>
      </InfoContainer>
      <LinkContainer>
        <DetailButton
          size="small"
          onClick={() => {
            setDetail_bool(true);
            fetch(
              `https://api.care-yojung.com/search/detail?id=${nursingHome_id}&service=aaa`,
              {
                method: "GET",
                headers: {
                  accept: "application/json",
                },
                credentials: "include",
              }
            )
              .then((res) => res.json())
              .then((res) => {
                setDetailData(res);
              });
            console.log(detailData);
          }}
        >
          <Icon name="plus square outline"></Icon>
          상세보기
        </DetailButton>
        <ReviewButton
          size="small"
          onClick={(event) => {
            event.stopPropagation();
            setReview_bool(true);
            console.log("aaa");
            event.stopPropagation();
          }}
        >
          <Icon name="comment outline"></Icon>
          리뷰하기
        </ReviewButton>
        {isWishPage ? (
          <CompareButton
            size="samll"
            onClick={(event) => {
              event.stopPropagation();
              handleOnAdd();
            }}
          >
            <Icon name="shopping cart"></Icon>
            비교담기
          </CompareButton>
        ) : null}
      </LinkContainer>
      <Review
        nursingHome_id={nursingHome_id}
        review_bool={review_bool}
        setReview_bool={setReview_bool}
        name={name}
        addrRoad={addrRoad}
      />
      <Detail
        nursingHome_id={nursingHome_id}
        detail_bool={detail_bool}
        setDetail_bool={setDetail_bool}
        name={name}
        detailData={detailData}
      />
    </ItemContainer>
  );
};

export default SearchItem;

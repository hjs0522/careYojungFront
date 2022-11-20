import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import Detail from "../Detail";
import Review from "../Review";
import { postWishItem, deleteWishItem } from "../../api";
import { useMediaQuery } from "react-responsive";
const HeartAppearing = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const ItemContainer = styled.li`
  display: flex;
  margin: 3vh 0px;
  align-items: center;
  border: 1px solid #e1e1e1;
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
    animation: ${HeartAppearing} 300ms ease-in-out 1;
    transition: opacity ease-in-out 100ms;
  }

  transition: all ease-in-out 300ms;
`;

const MobileItemContainer = styled.li`
  display: flex;
  margin: 3vh 0px;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  background-color: white;
  position: relative;
  & img {
    margin: 1vh;
  }

  & > i {
    position: absolute;
    top: 20px;
    left: 80px;
    animation: ${HeartAppearing} 300ms ease-in-out 1;
    transition: opacity ease-in-out 100ms;
  }

  transition: all ease-in-out 300ms;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
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
    border: 1px solid #496ace;
    color: #496ace;
  }
`;
const ReviewButton = styled(Button)`
  &.ui.button {
    background-color: #eeeeff;
    border: 1px solid #706ee9;
    color: #706ee9;
  }
`;

const CompareButton = styled(Button)`
  &.ui.button {
    background-color: #ffdaec;
    border: 1px solid #e9539b;
    color: #e9539b;
  }
`;
const PhoneNumberDiv = styled.div`
  color: #0596ff;
`;

const SearchItem = ({
  nursingHome_id,
  img,
  name,
  type,
  grade,
  score,
  reviewNum,
  addrFront,
  addrDetail,
  addrRoad,
  buildingMainNum,
  buildingSubNum,
  floor,
  phoneNumber,
  wish,
  onAdd,
  onEditWish,
  isWishPage,
  onRemoveWish,
  setBarOpen,
  compareList,
}) => {
  const itemRef = useRef(null);
  console.log("searchItem rendering");
  const [detail_bool, setDetail_bool] = useState(false); //상세정보 페이지 열려있는지 여부
  const [review_bool, setReview_bool] = useState(false); //리뷰페이지 열려있는지 여부
  const handleOnClick = () => {
    onEditWish(nursingHome_id, !wish);
    postWishItem(nursingHome_id);
  };

  const handleOnAdd = () => {
    onAdd(nursingHome_id, name);
    setBarOpen(true);
    itemRef.current.style = "border: solid 3px #496ACE";
  };

  const handleRemoveWishInSearch = () => {
    onEditWish(nursingHome_id, !wish);
    deleteWishItem(nursingHome_id, "ho");
  };
  const handleRemoveWish = () => {
    if (window.confirm(`${name}을 위시리스트에서 삭제하시겠습니까?`)) {
      onRemoveWish(nursingHome_id);
      deleteWishItem(nursingHome_id, "ho");
    }
  };

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

  useEffect(() => {
    let flag = false;
    for (let i = 0; i < compareList?.length; i++) {
      if (compareList[i].nursingHome_id === nursingHome_id) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      itemRef.current.style = "border: 1px solid #E1E1E1";
    }
  }, [compareList]);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  if (isMobile) {
    return (
      <MobileItemContainer ref={itemRef}>
        <img
          onClick={() => {
            setDetail_bool(true);
          }}
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
          src={
            `https://api.care-yojung.com/image/thumbnail?id=${nursingHome_id}`
            // photoarr[name] === 0
            //   ? "https://react.semantic-ui.com/images/wireframe/image.png"
            //   : photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY
          }
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
              handleRemoveWishInSearch();
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
            <h5>
              {name} ・ 요양원 ・ {grade === 0 ? "신설" : grade}
            </h5>
          </div>
          <div>
            <div>{getStar(score)}</div>
            <span>{reviewNum}</span>
          </div>
          <div>
            <span>{addrFront + " "}</span>
            <span>{addrRoad + " "}</span>
            <span>
              {buildingSubNum
                ? buildingMainNum + "-" + buildingSubNum + " "
                : buildingMainNum + " "}
            </span>
            <span>{addrDetail ? addrDetail : floor ? floor + "층" : null}</span>
          </div>
          <PhoneNumberDiv>T.{phoneNumber}</PhoneNumberDiv>
        </InfoContainer>
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
          />
      </MobileItemContainer>
    );
  }

  return (
    <ItemContainer ref={itemRef}>
      <img
        onClick={() => {
          setDetail_bool(true);
        }}
        style={{ width: "150px", height: "150px", cursor: "pointer" }}
        src={
          `https://api.care-yojung.com/image/thumbnail?id=${nursingHome_id}`
          // photoarr[name] === 0
          //   ? "https://react.semantic-ui.com/images/wireframe/image.png"
          //   : photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY
        }
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
            handleRemoveWishInSearch();
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
          <h5>{name} ・ 요양원</h5>
        </div>
        <div>
          <div>{getStar(score)}</div>
          <span>{reviewNum}</span>
        </div>
        <div>
          <span>{addrFront + " "}</span>
          <span>{addrRoad + " "}</span>
          <span>
            {buildingSubNum
              ? buildingMainNum + "-" + buildingSubNum + " "
              : buildingMainNum + " "}
          </span>
          <span>{addrDetail ? addrDetail : floor ? floor + "층" : null}</span>
        </div>
        <PhoneNumberDiv>T.{phoneNumber}</PhoneNumberDiv>
      </InfoContainer>
      <LinkContainer>
        <DetailButton
          size="small"
          onClick={() => {
            setDetail_bool(true); 
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
      />
    </ItemContainer>
  );
};

export default SearchItem;

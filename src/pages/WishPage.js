import { useEffect, useState } from "react";
import { Container,Dimmer,Loader,Image } from "semantic-ui-react";
import styled from "styled-components";
import DropDownRow from "../components/Header/DropDownRow";
import SearchList from "../components/Search/SearchList";
import { getWishList } from "../api";
import { useQuery } from "react-query";
import CompareBar from "../components/Compare/CompareBar";
import { useRecoilState } from "recoil";
import { keywordState,serviceState,gradeState,orderState } from "../atom";
const PageContainer = styled.div`
  background-color: #f5f7fa;
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vh;
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 1vw;
`;

const WishPage = ()=>{
    const [barOpen,setBarOpen] = useState(false);
    const [compareList,setCompareList] = useState([]);
    const [keyword,setKeyword] = useRecoilState(keywordState);
    const [service,setService] = useRecoilState(serviceState);
    const [grade,setGrade] = useRecoilState(gradeState);
    const [order,setOrder] = useRecoilState(orderState);
    const {isLoading,data} = useQuery(['wishList'],getWishList)
    

  const onAdd = (nursingHome_id, name) => {
    const newItem = {
      nursingHome_id,
      name,
    };

    let flag = false;
    for (let i = 0; i < compareList.length; i++) {
      if (compareList[i].nursingHome_id === nursingHome_id) {
        flag = true;
      }
    }

    if (!flag) {
      if (compareList.length < 3) {
        setCompareList([...compareList, newItem]);
      } else {
        alert("비교하기는 최대 3개까지 가능합니다");
      }
    } else {
      alert("이미 추가된 시설입니다");
    }
  };

  const onRemoveCompare = (targetId) => {
    const newCompareList = compareList.filter(
      (it) => it.nursingHome_id !== targetId
    );
    setCompareList(newCompareList);
  };

  const onRemoveWish = (targetId) => {
    data?.filter(
      (it) => it.nursingHome_id !== targetId
    );
  };

  const onEditWish = (targetId, newWish) => {
      data?.map((it) =>
        it.nursingHome_id === targetId ? { ...it, wish: newWish } : it
      )
  };

  return (
    <PageContainer>
      <DropDownRow
        service={service}
        grade={grade}
        order={order}
        setService={setService}
        setGrade={setGrade}
        setOrder={setOrder}
      ></DropDownRow>
      <Container>
        <TextDiv>
          <TitleText>위시리스트</TitleText>
          <text>최대 3개의 시설을 비교 할 수 있습니다</text>
        </TextDiv>
        {isLoading?
        <>
          <Dimmer active>
              <Loader>Loading</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </>
        :
        <SearchList
          searchList={data}
          onAdd={onAdd}
          onEditWish={onEditWish}
          onRemoveWish={onRemoveWish}
          compareList={compareList}
          isWishPage={true}
          setBarOpen={setBarOpen}
        ></SearchList>
        }
      </Container>
      <CompareBar barOpen = {barOpen} setBarOpen = {setBarOpen} compareList = {compareList} onRemoveCompare = {onRemoveCompare}></CompareBar>
    </PageContainer>
  );
};

export default WishPage;

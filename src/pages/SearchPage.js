import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Container, Dimmer, Loader, Image } from "semantic-ui-react";
import styled from "styled-components";
import { getSearchList, postReissuance } from "../api";
import { keywordState, serviceState, gradeState, orderState } from "../atom";
import { useRecoilState } from "recoil";
import DropDownRow from "../components/Header/DropDownRow";
import Pagination from "../components/Pagination";
import SearchList from "../components/Search/SearchList";

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
const SearchPage = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [service, setService] = useRecoilState(serviceState);
  const [grade, setGrade] = useRecoilState(gradeState);
  const [order, setOrder] = useRecoilState(orderState);
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState(1);

  const offset = (page - 1) * 5;

  useEffect(() => {
    getSearchList(keyword, service, grade, order).then((data) => {
      setSearchList(data);
      setLoading(false);
    });
  }, [keyword, service, grade, order]);

  const onEditWish = (targetId, newWish) => {
    setSearchList(
      searchList.map((it) =>
        it.nursingHome_id === targetId ? { ...it, wish: newWish } : it
      )
    );
  };
  return (
    <PageContainer>
      <DropDownRow
        keyword={keyword}
        service={service}
        grade={grade}
        order={order}
        setService={setService}
        setGrade={setGrade}
        setOrder={setOrder}
      ></DropDownRow>
      <Container>
        <TextDiv>
          <TitleText>시설리스트</TitleText>
          <text>고객님의 추천 시설 리스트 입니다.</text>
        </TextDiv>
        {loading ? (
          <>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </>
        ) : (
          <>
            <SearchList
              searchList={searchList.slice(offset, offset + 5)}
              onEditWish={onEditWish}
            ></SearchList>
            <Pagination
              total={searchList.length > 30 ? 30 : searchList.length}
              page={page}
              setPage={setPage}
            ></Pagination>
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default SearchPage;

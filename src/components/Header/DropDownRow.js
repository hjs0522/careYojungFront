import styled from "styled-components";
import { Dropdown, Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  serviceOptions,
  gradeOptions,
  orderOptions,
  keywordOptions,
} from "../../searchOptions";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import {
  keywordState,
  serviceState,
  gradeState,
  orderState,
  wordsState,
} from "../../atom";
const DropdownBack = styled.div`
  background-color: white;
`;

const DropdownContainer = styled(Container)`
  &.ui.container {
    padding-top: 10vh;
    padding-bottom: 2vh;
  }
`;

const DropdownNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & a {
    color: white;
    background-color: #496ace;
    padding: 8px;
    border-radius: 10%;
  }

  & text {
    margin-right: 10px;
  }
`;

const DropdownDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const DropDownRow = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [service, setService] = useRecoilState(serviceState);
  const [grade, setGrade] = useRecoilState(gradeState);
  const [order, setOrder] = useRecoilState(orderState);
  const [words,setWords] = useRecoilState(wordsState);
  
  const handleServiceChange = (e, { value: service }) => {
    setService(service);
  };

  const handleGradeChange = (e, { value: grade }) => {
    setGrade(grade);
  };

  const handleOrderChange = (e, { value: order }) => {
    setOrder(order);
  };
  const handleWordsChange = (e, { value: words }) => {
    setWords(words);
  };
  
  
  

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  if (isMobile) {
    return <></>;
  }

  return (
    <DropdownBack>
      <DropdownContainer>
        <DropdownNav>
          <DropdownDiv>
            <text>서비스</text>
            <Dropdown
              options={serviceOptions}
              onChange={handleServiceChange}
              value={service}
              selection
            ></Dropdown>
          </DropdownDiv>
          <DropdownDiv>
            <text>등급</text>
            <Dropdown
              options={gradeOptions}
              onChange={handleGradeChange}
              value={grade}
              selection
            ></Dropdown>
          </DropdownDiv>
          <DropdownDiv>
            <text>순서</text>
            <Dropdown
              options={orderOptions}
              onChange={handleOrderChange}
              value={order}
              selection
            ></Dropdown>
          </DropdownDiv>
          <DropdownDiv>
            <text>키워드</text>
            <Dropdown
              options={keywordOptions}
              onChange={handleWordsChange}
              value={words}
              selection
            ></Dropdown>
          </DropdownDiv>
          <DropdownDiv>
            {props.isMapPage ? (
              <Link
                to={`/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}`}
              >
                <Icon name="list"></Icon>
                리스트로 보기
              </Link>
            ) : (
              <Link
                to={`/search/map?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}`}
              >
                <Icon name="map outline"></Icon>
                지도로 보기
              </Link>
            )}
          </DropdownDiv>
        </DropdownNav>
      </DropdownContainer>
    </DropdownBack>
  );
};

export default DropDownRow;

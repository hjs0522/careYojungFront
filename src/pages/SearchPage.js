import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Container, Dimmer, Loader,Image} from "semantic-ui-react";
import styled from "styled-components";
import { getSearchList } from "../api";
import DropDownRow from "../components/Header/DropDownRow";
import Pagination from '../components/Pagination'
import SearchList from "../components/Search/SearchList";


const PageContainer = styled.div`
    background-color: #F5F7FA;
`
const TextDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3vh;
`

const TitleText = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 1vw;
`
const SearchPage = ({service,grade,order,setService,setGrade,setOrder})=>{
    console.log("searchPage render")
    const [page,setPage] = useState(1);
    const [searchParams,setSearchParams] = useSearchParams();
    
    const keyword = searchParams.get("keyword");
    
    useEffect(()=>{
        console.log("setSearchParmas")
        setSearchParams({keyword: keyword, service: service, grade: grade, order:order});
    },[setSearchParams,keyword,service,grade,order])
    
    const offset = (page-1) * 5;
    const {isLoading,data} = useQuery(['searchList'],()=>getSearchList(keyword,service,grade,order))
    const onEditWish = (targetId, newWish)=>{
        data?.map((it)=>
            it.nursingHome_id ===targetId ? {...it,wish:newWish} : it
        )
    };
    

    return(
    <PageContainer>
        <DropDownRow keyword={keyword} service={service} grade={grade} order={order} setService = {setService} setGrade = {setGrade} setOrder = {setOrder}></DropDownRow>
        <Container>
            <TextDiv>
                <TitleText>시설리스트</TitleText>
                <text>고객님의 추천 시설 리스트 입니다.</text>
            </TextDiv>
            {isLoading?
            <>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </>
            :<>
                <SearchList searchList={data?.slice(offset,offset+5)} onEditWish={onEditWish} ></SearchList>
                <Pagination
                total = {data?.length}
                page = {page}
                setPage = {setPage}>
                </Pagination>
             </>
            }
        </Container>
    </PageContainer>
    )
};

export default SearchPage;
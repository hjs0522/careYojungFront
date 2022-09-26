import { useEffect, useState } from "react";
import {useNavigate, useSearchParams } from "react-router-dom";
import { Container} from "semantic-ui-react";
import styled from "styled-components";
import DropDownRow from "../components/Header/DropDownRow";
import Pagination from '../components/Pagination'
import SearchList from "../components/Search/SearchList";


const PageContainer = styled.div`
    background-color: #F5F7FA;
`



const SearchPage = ()=>{
    console.log("searchPage render")
    const navigate =useNavigate();
    const [searchList,setSearchList] = useState([]);
    const [page,setPage] = useState(1);
    const [searchParams,setSearchParams] = useSearchParams();
    
    const keyword = searchParams.get("keyword");
    const queryService = searchParams.get("service");
    const queryGrade = searchParams.get("grade");
    const queryOrder = searchParams.get("order");
    
    const [service,setService] =useState(queryService);
    const [grade,setGrade] = useState(queryGrade);
    const [order,setOrder] = useState(queryOrder);
    
    useEffect(()=>{
        setSearchParams({keyword: keyword, service: service, grade: grade, order:order});
    },[setSearchParams,keyword,service,grade,order])
    
    const offset = (page-1) * 5;
    
    useEffect(() =>{
        
        fetch(`http://15.164.184.243:8080/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}&memberId=user2`)
            .then((res) => res.json())
            .then((data)=> {
                //console.log(data);
                setSearchList(data);
                //console.log(data.name);
                return data;
            });
    },[keyword,service,grade,order]);
    
    const onEditWish = (targetId, newWish)=>{
        setSearchList(
            searchList.map((it)=>
                it.nursingHome_id ===targetId ? {...it,wish:newWish} : it
            )
        );
    };
    return(
    <PageContainer>
        <DropDownRow keyword={keyword} service={service} grade={grade} order={order} setService = {setService} setGrade = {setGrade} setOrder = {setOrder}></DropDownRow>
        <Container>
            <SearchList searchList={searchList.slice(offset,offset+5)} onEditWish={onEditWish} ></SearchList>
            <Pagination
                total = {searchList.length}
                page = {page}
                setPage = {setPage}
            ></Pagination>
        </Container>
    </PageContainer>
    )
};

export default SearchPage;
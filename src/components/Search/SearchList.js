
import SearchItem from "./SearchItem";


const SearchList = ({searchList,onAdd,onEditWish,isWishPage,onRemoveWish,setBarOpen,compareList}) =>{
    return(
     <ui>
        {searchList?.map((it)=>(<>
            <SearchItem key={it.nursingHome_id} {...it} onAdd={onAdd}  onEditWish = {onEditWish} isWishPage={isWishPage} onRemoveWish={onRemoveWish} setBarOpen={setBarOpen} compareList = {compareList}/>
        </>
        ))}
     </ui>   
    );
};

export default SearchList;
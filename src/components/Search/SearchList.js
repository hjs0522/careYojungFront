
import SearchItem from "./SearchItem";


const SearchList = ({searchList,onAdd,onEditWish,isWishPage,onRemoveWish,setBarOpen}) =>{
    return(
     <ui>
        {searchList.map((it)=>(<>
            <SearchItem key={it.nursingHome_id} {...it} onAdd={onAdd}  onEditWish = {onEditWish} isWishPage={isWishPage} onRemoveWish={onRemoveWish} setBarOpen={setBarOpen}/>
        </>
        ))}
     </ui>   
    );
};

export default SearchList;
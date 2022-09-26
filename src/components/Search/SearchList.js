
import SearchItem from "./SearchItem";


const SearchList = ({searchList,onAdd,onEditWish,isWishPage,onRemoveWish}) =>{
    return(
     <ui>
        {searchList.map((it)=>(<>
            <SearchItem key={it.nursingHome_id} {...it} onAdd={onAdd} onEditWish = {onEditWish} isWishPage={isWishPage} onRemoveWish={onRemoveWish}/>
        </>
        ))}
     </ui>   
    );
};

export default SearchList;
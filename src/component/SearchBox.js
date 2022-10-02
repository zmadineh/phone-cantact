import {FaSearch} from "react-icons/fa";

const SearchBox = ({contactFilter}) => {
    return (
        <div style={{margin: '10px', width: '30%'}}>
            <div className={'toolbar-search'}>
                <FaSearch style={{color: '#a1a1a1', margin: '0 6px'}}/>
                <input className='search_input' name={'search-contact'} type={"text"} onChange={contactFilter} />
            </div>
        </div>
    )
}

export default SearchBox;
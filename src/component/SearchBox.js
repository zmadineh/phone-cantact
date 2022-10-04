import {FaSearch} from "react-icons/fa";

const SearchBox = ({filter}) => {
    return (
        <div style={{width: '90%', margin: '0 10px'}}>
            <div className={'toolbar-search'}>
                <FaSearch style={{color: '#a1a1a1', margin: '0 6px'}}/>
                <input className='search_input' name={'search-contact'} type={"text"} onChange={filter} />
            </div>
        </div>
    )
}

export default SearchBox;
import {FaSearch} from "react-icons/fa";
import '../App.css';
import clsx from "clsx";

const SearchBox = ({filter}) => {
    return (
        <div className={'searchBox'}>
            <div className={'toolbar-search'}>
                <FaSearch className={clsx('gray_heart', 'icon_margin' )}/>
                <input className='search_input' name={'search-contact'} type={"text"} onChange={filter} />
            </div>
        </div>
    )
}

export default SearchBox;
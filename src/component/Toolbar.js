import { Link } from "react-router-dom";
import {FaHeart, FaRegHeart, FaUserPlus} from "react-icons/fa";
import SearchBox from "./SearchBox";
import {emptyForm} from "../data/emptyForm";
import clsx from "clsx";

const Toolbar = ({contactFilter, searchFavEnable, favouriteFilter, setForm, setFormStatus, lastId}) => {

    const handleAddIcon = () => {
        setForm({id: lastId+1, ...emptyForm})
        setFormStatus('Add')
    }
    return (
        <div className='toolbar'>
            <div className={'searchBox_container'}> <SearchBox filter={contactFilter} /> </div>
            <h2 className={'toolbar_title'}>Contacts</h2>
            <div className={'toolbarIcon-container'}>
                {searchFavEnable ? <FaHeart className={clsx('toolbarFav_icon', 'red_heart')}  onClick={favouriteFilter} /> :
                    <FaRegHeart className={clsx('toolbarFav_icon', 'gray_heart')} onClick={favouriteFilter}/> }
                <Link to={`/Add/0`}><FaUserPlus className={'toolbar-addUser'} onClick={handleAddIcon}/></Link>
            </div>
        </div>
    )
}

export default Toolbar;
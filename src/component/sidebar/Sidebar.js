import './sidebar.styel.css';
import SearchBox from "../SearchBox";

const Sidebar = () => {

    const filter = () => {
        console.log('filter')
    }
    return (
        <div className={'sidebar_container'}>
            <SearchBox filter={filter} />
        </div>
    )
}

export default Sidebar;
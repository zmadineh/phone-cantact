import React from "react";
import nothing_img1 from '../assets/no_results_found.png';
import nothing_img2 from '../assets/nothing-to-show-woman.png';
import nothing_img3 from '../assets/nothing-to-show-man.png';
import nothing_img4 from '../assets/nothing-to-show.png';

const NothingToShow = () => {
    return (
        <div className={'nothing_img_container'}>
            <img className={'nothing-to-show_image'} src={nothing_img2}/>
            <h2>Add Contacts :)</h2>
        </div>

    )
}

export default NothingToShow;
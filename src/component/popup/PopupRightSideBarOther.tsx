import React from 'react'

interface PopupSideBarOtherProps {
    closePopup: () => void;
}

const PopupRightSideBarOther: React.FC<PopupSideBarOtherProps> = () => {
    return (
        <div className='flex-col absolute top-[154px] bg-gray-200 right-[40px]'>
            PopupSideBarOther</div>
    )
}

export default PopupRightSideBarOther
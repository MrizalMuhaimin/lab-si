import {getImagePath} from '../../../helpers/getImagePath';
function ItemMenu ({icon, title, link}) {
    return ( 
        <a href={link} className='w-full h-16 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300 group tooltip tooltip-right ' data-tip={title}>
            <div className='bg-gray-300 rounded-md items-center flex justify-center group-hover:bg-white' style={{width:45, height:45}}>
                <img src={getImagePath(icon)} style={{width:35, height:35}} alt='menu' />
            </div>
        </a>
    )
}

export default ItemMenu;
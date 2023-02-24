import star from '../star.png'
export default function ProductCard(props){
    return(
        <button className='relative w-[516px] h-[291px] shrink-0 rounded-[21px] overflow-hidden snap-start hover:scale-90 hover:shadow-[0_4px_12px_-1px_rgba(196,196,196,0.4)] hover:duration-300 hover:ease-out'>
                <img src={props.img} alt="" className='w-full h-full'/>
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
                <div className='absolute w-full flex flex-col pl-[33px] top-[223px] bottom-5 text-white'>
                    <div className='flex justify-between items-center font-[Outfit] font-medium text-2xl'>
                        <h1 className=' flex justify-start items-center font-[Outfit] font-medium text-2xl'>
                            {props.title}
                        </h1>
                        <h1 className=' flex justify-end items-center font-[Outfit] font-medium text-sm mr-7'>
                            $ {props.price}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-[Outfit] font-normal text-xs text-[#747474]'>
                            Category: {props.cat}
                        </p>
                        <div className='flex items-center mr-8'>
                            <img src={star} alt="star icon" className='w-[19.97px] h-[18.99px] mr-1' />
                            <p className='font-[Outfit] font-medium text-xs'>
                                {props.rate}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-[Outfit] font-normal text-xs text-[#747474]'>
                            Brand: {props.brand}
                        </p>
                    </div>
                </div>
           </button>
    )
}
import Link from 'next/link'
import React from 'react'
import { AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCalendarDateFill, BsShareFill } from 'react-icons/bs'
import s from './Card.module.css'


const Card = ({title, date,coverImage, slug, content, tags}) => {
    
    return (
        <div className='my-20 box_shadow rounded-3xl'>
            <div className={s.card_blog}>
                <div>
                    <div className={s.image}>
                        <img src={coverImage.url} alt="img" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className={s.fav}>
                            <div className='flex gap-2 items-center'>
                                <BsFillCalendarDateFill size={25} color={'black'}/>
                                <h1 className='font-bold dark:text-black'>{date}</h1>
                            </div>
                        </div>
                        <div className=' mt-5 sm:mt-0 -translate-y-[45px] sm:-translate-y-[40px] flex gap-10 justify-between items-center cursor-pointer'>
                            <p className='bg-primary-blue text-white rounded-3xl px-5'>
                                {tags}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={s.text}>
                    <h1 className='text-3xl font-bold dark:text-black'>{title}</h1>
                    <div className="inline-block w-20 h-1 bg-primary-blue rounded-full"></div>
                    <p className='dark:text-black'>{content}</p>
                    
                    
                    <Link href={"/posts/" + slug}>
                        <button className={s.read_button}>Подробнее</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
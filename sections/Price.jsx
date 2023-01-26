import {BsFillCheckCircleFill, BsPlusCircleFill} from 'react-icons/bs'
import {AiFillMinusCircle} from 'react-icons/ai'
import {TiDelete, TiDeleteOutline} from 'react-icons/ti'
import Button from '../components/Button'
import React from 'react'

const Price = () => {
    const [count, setCount] = React.useState(1)
    const [lp, setLp] = React.useState(9)
    
    const onCLickPlus = () => {
        setCount(count + 1)
    }
    const onClickMinus = () => {
        if(count > 1) {
            setCount(count - 1 )
        } else {
            false
        }
    }

    const lpp = () => {
        onCLickPlus()
        setLp(count * 9 + 9)
    };
    
    const lpm = () => {
        onClickMinus()
        if (lp > 9) {
            setLp(lp - 9)
        } else {
            false
        }
    }

    const [count2, setCount2] = React.useState(1)
    const [p, setP] = React.useState(14)
    
    const onCLickPlus2 = () => {
        setCount2(count2 + 1)
    }
    const onClickMinus2 = () => {
         count2 > 1 ?   setCount2(count2 - 1 ) : false
    }

    const pp = () => {
        onCLickPlus2()
        setP(count2 * 14 + 14)
    };
    
    const pm = () => {
        onClickMinus2()
        if (p > 14) {
            setP(p - 14)
        } else {
            false
        }
    }

    const [count3, setCount3] = React.useState(1)
    const [om, setOm] = React.useState(27)
    
    const onCLickPlus3 = () => {
        setCount3(count3 + 1)
    }
    const onClickMinus3 = () => {
         count3 > 1 ?   setCount3(count3 - 1 ) : false
    }

    const omp = () => {
        onCLickPlus3()
        setOm(count3 * 27 + 27)
    };
    
    const omm = () => {
        onClickMinus3()
        if (om > 27) {
            setOm(om - 27)
        } else {
            false
        }
    }


    return (
        <>
            <h1 className='mt-[100px] text-4xl text-center font-bold'>Services</h1>
            <section className="mt-[30px] mx-auto md:flex justify-between">
                <div className="box_shadow mb-10 mx-auto bg-white dark:bg-primary-blue  sm:w-[360px] sm:h-[600px] lg:h-[550px] rounded-2xl p-5">
                    <h1 className="text-2xl font-bold text-center">Landing page</h1>
                    <div className="h-[5px] w-[100px] bg-primary-blue dark:bg-white rounded-full mx-auto mt-2"></div>
                    <div className='mt-6'>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Адаптивная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Pixel Perfect</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Hover эффекты</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Анимации</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Сложная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Форма обратной связи</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><TiDelete className="text-red-500 -translate-x-1" size={30}/>Платежная система</h1>
                    </div>
                    <h1 className='text-6xl font-bold text-center text-primary-blue dark:text-white mt-7'>${lp}</h1>
                    <div className='mt-5 flex gap-10 justify-center items-center'>
                        <h1 className='text-center text-xl font-bold'>Кол-во страниц</h1>
                        <div className='flex items-center justify-center gap-5'>
                            <AiFillMinusCircle onClick={lpm} size={25}/>
                            <p className='font-bold text-2xl'>{count}</p>
                            <BsPlusCircleFill onClick={lpp} size={20}/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className="bg-primary-blue dark:bg-white dark:text-primary-blue text-white px-6 mt-5">Связаться</Button>
                    </div>
                </div>
                <div className="box_shadow mb-10 mx-auto bg-white dark:bg-primary-blue sm:w-[360px] sm:h-[710px] lg:h-[650px] rounded-2xl p-5">
                    <h1 className="text-2xl font-bold text-center">Сайт Портфолио</h1>
                    <div className="h-[5px] w-[100px] bg-primary-blue dark:bg-white rounded-full mx-auto mt-2"></div>
                    <div className='mt-6'>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Адаптивная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Pixel Perfect</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Hover эффекты</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Анимации</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Сложная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Форма обратной связи</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Страница блога</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Темная тема</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Next JS, Tailwind</h1>
                    </div>
                    <h1 className='text-6xl font-bold text-center text-primary-blue dark:text-white mt-7'>${p}</h1>
                    <div className='mt-5 flex gap-10 justify-center items-center'>
                        <h1 className='text-center text-xl font-bold'>Кол-во страниц</h1>
                        <div className='flex items-center justify-center gap-5'>
                            <AiFillMinusCircle onClick={pm} size={25}/>
                            <p className='font-bold text-2xl'>{count2}</p>
                            <BsPlusCircleFill onClick={pp} size={20}/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className="bg-primary-blue dark:bg-white dark:text-primary-blue text-white px-6 mt-5">Связаться</Button>
                    </div>
                </div>
                <div className="box_shadow bg-white mx-auto dark:bg-primary-blue sm:w-[360px] sm:h-[780px] lg:h-[750px] rounded-2xl p-5">
                    <h1 className="text-2xl font-bold text-center">Online магазин</h1>
                    <div className="h-[5px] w-[100px] bg-primary-blue dark:bg-white rounded-full mx-auto mt-2"></div>
                    <div className='mt-6'>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Адаптивная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Pixel Perfect</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Hover эффекты</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Анимации</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Сложная верстка</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Форма обратной связи</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Валидация формы</h1>

                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Регистрация</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Корзина товаров</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Подключение БД</h1>
                        <h1 className='flex items-center gap-5 text-xl mb-2'><BsFillCheckCircleFill className="text-green-500" size={20}/>Next JS, Tailwind</h1>

                    </div>
                    <h1 className='text-6xl font-bold text-center text-primary-blue dark:text-white mt-7'>${om}</h1>
                    <div className='mt-5 flex gap-10 justify-center items-center'>
                        <h1 className='text-center text-xl font-bold'>Кол-во страниц</h1>
                        <div className='flex items-center justify-center gap-5'>
                            <AiFillMinusCircle onClick={omm} size={25}/>
                            <p className='font-bold text-2xl'>{count3}</p>
                            <BsPlusCircleFill onClick={omp} size={20}/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className="bg-primary-blue dark:bg-white dark:text-primary-blue text-white px-6 mt-5">Связаться</Button>
                    </div>
                </div>
                
            </section>
            <h1>Цена указана за</h1>
        </>
    )
}

export default Price
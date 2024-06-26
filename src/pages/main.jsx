import React from 'react'
import { Fragment, useState, useEffect, useContext } from "react";
import Kalyan from "./../img/Kalyan.png";
import Hello from "./../img/Hello.png";
import FogOne from "./../img/FogOne.png";
import FogTwo from "./../img/FogTwo.png";
import { Link } from 'react-router-dom';
import LoungeImage from "./../img/lounge.png";
import IdealBreakfast from "./../img/idealBreakfast.png"
import Portal from "./../img/Portal.png"
import vectorOne from "./../img/vectorOne.svg"
import vectorTwo from "./../img/vectorTwo.svg"
// import southVibe from "./../img/southVibe.png"
import { Helmet } from 'react-helmet';
import "./../index.scss"
import axios from "axios";

export default function Main() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get("http://localhost:7777/products")
        .then((res) => {
          
          setData(res.data)
        }).catch((err) => {
          alert(err)
        })
    },[])
  
    console.log(data);
    return (
        <Fragment>
            <Helmet>
                <title>Hookah - Главная</title>
            </Helmet>

            <div className='main-wrap'>

                <header className='header'>

                    <div className='container'>
                        <div className="kalyan-wrap">
                            <div className="main-hello">
                                <p className="hello-text">Приветствуем на</p>
                                <img src={Hello} alt="error" className="hello-name" />
                                <img src={Kalyan} alt="error" className="hello-kalyan" />
                                <img src={Portal} alt="error" className="hello-portal" />
                                <div className='subtitle-wrap'>

                                    <div className="main-subtitle">
                                        <div className="subtitle-item">
                                            <img className='vector-one' src={vectorOne} alt='error' />
                                            <img className='vector-two' src={vectorTwo} alt='error' />
                                            <p className="item-text">Здесь ты найдешь
                                                <br />
                                                миксы на любой вкус</p>
                                        </div>
                                        <div className="subtitle-item">
                                            <img className='vector-one' src={vectorOne} alt='error' />
                                            <img className='vector-two2' src={vectorTwo} alt='error' />
                                            <p className="item-text">И сможешь поделиться
                                                <br />
                                                своими миксами</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <img src={FogOne} alt="error" className="hello-fog1" />
                            <img src={FogTwo} alt="error" className="hello-fog2" />

                        </div>

                    </div>
                </header>

                <main className='main'>
                    <div className='container'>
                        <h1 className='main-title'>Популярные табаки</h1>
                        <hr className='chertochka' />

                        <div className="cards-tabacks" id="cards-tabacks">
              {data?.map((product) => {
                return(
                  <div className="card-product">
                <img className="product-image" src={product?.photo} alt="error" />
                <b className="product-category">{product?.category?.categoryName}</b>
                <br />
                <Link to="/tabacks/product/${product.id}" className="product-title">
                     {product?.title}
                </Link>
                <hr />
                <div className="product-taste">
                  <p className="taste-item">{product.category?.taste1}</p>
                  <p className="taste-item">{product.category?.taste2}</p>
                  <p className="taste-item">{product.category?.taste3}</p>
                  <p className="taste-item">{product.category?.taste4}</p>
                  <p className="taste-item">{product.category?.taste5}</p>
               
                </div>
              </div>
                )
              })}

            </div>
                    </div>


                    <section className='create-section-one'>
                        <div className='container'>
                            <div className='create-title'>

                                <h1 className='title-item'>Создай свой микс</h1>
                                <p className='create-desc'>Мы рады тому, что способны удовлетворить даже самые притязательные
                                    требования наших Клиентов, а в ближайших планах нашей компании, еще
                                    больше расширить ассортимент товаров и услуг. </p>
                            </div>

                        </div>
                    </section>

                    <section className='create-section-two'>
                        <div className='container'>
                        <h1 className='main-title'>Популярные миксы</h1>
                        <hr className='chertochka' />

                            <div className="cards-mixes">
                                <div className="card-product">
                                    <img className="product-image" src={IdealBreakfast} alt="error" />
                                    <b className="product-loc">Лубянка</b>
                                    <br />
                                    <Link to="/mixes/product/:id" className="product-title">
                                        Идеальный завтрак
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>
                                <div className="card-product">
                                    <img className="product-image" src={IdealBreakfast} alt="error" />
                                    <b className="product-loc">Лубянка</b>
                                    <br />
                                    <Link to="/mixes/product/" className="product-title">
                                        Идеальный завтрак
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>
                                <div className="card-product">
                                    <img className="product-image" src={IdealBreakfast} alt="error" />
                                    <b className="product-new">НОВИНКА</b>
                                    <br />
                                    <Link to="/mixes/product/:id" className="product-title">
                                        Идеальный завтрак
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>
                           
                            </div>
                            <h1 className='main-title'>Популярные лаунжи</h1>
                        <hr className='chertochka' />

                            <div className="cards-lounges">
                                <div className="card-product">
                                    <img className="product-image" src={LoungeImage} alt="error" />
                                    <b className="product-loc">Лубянка</b>
                                    <br />
                                    <Link to="/lounges/product/:id" className="product-title">
                                        МЯТА LOUNGE На Лубянке
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>
                                <div className="card-product">
                                    <img className="product-image" src={LoungeImage} alt="error" />
                                    <b className="product-loc">Лубянка</b>
                                    <br />
                                    <Link to="/lounges/product/" className="product-title">
                                        МЯТА LOUNGE На Лубянке
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>
                                <div className="card-product">
                                    <img className="product-image" src={LoungeImage} alt="error" />
                                    <b className="product-loc">Лубянка</b>
                                    <br />
                                    <Link to="/lounges/product/:id" className="product-title">
                                        МЯТА LOUNGE На Лубянке
                                    </Link>
                                    <hr />
                                    <div className="product-price"></div>
                                </div>

                            </div>

                          

                        </div>
                    </section>


                </main>

            </div>


        </Fragment>

    )
}


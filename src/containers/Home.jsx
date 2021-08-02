import React, { useState, useEffect } from "react";
import { connect } from "react-redux"; //conecta nuesta aplicacion con nuestro estado
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header";
import "../assets/styles/App.scss";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

/**
 **1.- mapStateToProps(Es el mapeo de nuestros props)
 **2.-mapDispatchToProps(dispatch son los elementos que vamos a disparar por medio de nuestors actions)
 */
export default connect(mapStateToProps, null)(Home);

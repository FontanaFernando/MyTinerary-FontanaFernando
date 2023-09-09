import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./card.css"

const Title = ({ children }) => {
    return (
        <h2 className="card_title">{children}</h2>
    )
}

const Button = ({ nameCity, children }) => {
    return (
        <Link to={"/CardDetail/"+nameCity} className="card_button">{children}</Link>
    );
};

const Country = ({ children }) => {
    return (
        <h4 className="card_country">{children}</h4>
    )
}

const Image = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="card_img" />
    )
}

const Card = ({ keys, title, button, country, image }) => {
    return (
        <div className="card" key={keys} >
            <div className="card_info">
            <Title>{title}</Title>
            <Country>{country}</Country>
            </div>
            <Image src={image} alt={title} />
            <Button nameCity={title}>{button}</Button>
        </div>
    );
}

export default Card;


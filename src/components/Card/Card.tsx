import Image from "next/image";

import { generatePropertySymbolType } from "./GeneratePropertySymbolType";

import image_not_found from "../../../public/assets/images/image-not-found.jpg";

import "./Card.css";

interface CardProps {
  airbnbData: any;
}

export const Card = (props: CardProps) => {
  const data = props.airbnbData;

  return (
    <div>
      <div className="card">
        {data.images.picture_url != null && data.images.picture_url != "" ? (
          <img
            alt={`foto de ${data.name}`}
            src={data.images.picture_url}
            className="picture"
          />
        ) : (
          <Image
            src={image_not_found}
            alt="imagem não achada"
            width={200}
            height={200}
          ></Image>
        )}
        <div className="card-elements">
          <div className="text-and-stars">
            <div className="title-and-location">
              <h1 className="card-title">{data.name}</h1>
              <h4 className="property">
                {generatePropertySymbolType(data.property_type ?? "")}{" "}
                {data.property_type}
                <span className="dot"> • </span>
                {data.room_type}
              </h4>
              <h4 className="location">
                <i className="fa-solid fa-location-dot location-dot"></i>
                {data.address.street}
              </h4>
            </div>
            <div className="star-and-rating">
              <i
                className={
                  !data.review_scores.review_scores_rating
                    ? "fa-regular fa-star empty-star"
                    : "fa-solid fa-star gold-star"
                }
              />
              {!data.review_scores.review_scores_rating
                ? "Sem avaliações"
                : data.review_scores.review_scores_rating / 20}
            </div>
          </div>

          <div className="airbnb-info">
            <div className="info">
              <div className="info-symbol">
                <i className="fa-solid fa-sack-dollar" />
              </div>
              <div className="info-text">
                <div className="info-title">Preço</div>
                USD {data.price}/dia
              </div>
            </div>

            <div className="info">
              <div className="info-symbol">
                <i className="fa-solid fa-person info-symbol" />
              </div>
              <div className="info-text">
                <div className="info-title">Quantos acomoda:</div>
                {data.accommodates}{" "}
                {data.accommodates > 1 ? "pessoas" : "pessoa"}
              </div>
            </div>

            <div className="info">
              <div className="info-symbol">
                <i className="fa-solid fa-clock" />
              </div>
              <div className="info-text">
                <div className="info-title">Quantas noites:</div>
                {data.minimum_nights} - {data.maximum_nights} noites
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

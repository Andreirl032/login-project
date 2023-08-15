import Image from "next/image";

import { Stars } from "../Stars/Stars";
import image_not_found from "../../../public/assets/images/image-not-found.jpg";

import "./Card.css";

interface CardProps {
  airbnbData: any;
  star_value: any;
}

export const Card = (props: CardProps) => {
  const data = props.airbnbData;
  console.log(props.star_value);
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
        <div className="title-and-location">
          <h1 className="card-title">{data.name}</h1>
          <h4 className="location">
            <i className="fa-solid fa-location-dot location-dot"></i>
            {data.address.street}
          </h4>
        </div>
        <div className="stars">
          <Stars star_value={props.star_value} />
        </div>
      </div>
    </div>
  );
};

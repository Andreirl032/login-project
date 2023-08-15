import "./Stars.css";

export const Stars = (star_value: { star_value: number }) => {
  switch (star_value.star_value) {
    case 0:
      return (
        <div>
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
        </div>
      );
    case 1:
      return (
        <div>
          <i className="fa-solid fa-star full" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
        </div>
      );
    case 2:
      return (
        <div>
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
        </div>
      );
    case 3:
      return (
        <div>
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-regular fa-star empty" />
          <i className="fa-regular fa-star empty" />
        </div>
      );
    case 4:
      return (
        <div>
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-regular fa-star empty" />
        </div>
      );
    case 5:
      return (
        <div>
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
          <i className="fa-solid fa-star full" />
        </div>
      );
  }
};

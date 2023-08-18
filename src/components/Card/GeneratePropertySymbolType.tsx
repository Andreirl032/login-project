export const generatePropertySymbolType = (property_type: string) => {
  switch (property_type) {
    case "House":
      return <i className="fa-solid fa-house" />;

    case "Apartment":
      return <i className="fa-solid fa-building" />;

    case "Condominium":
      return <i className="fa-solid fa-city" />;

    case "Guesthouse":
      return <i className="fa-solid fa-house" />;

    case "Serviced apartment":
      return <i className="fa-solid fa-building" />;

    case "Bed and breakfast":
      return <i className="fa-solid fa-bed" />;

    case "Treehouse":
      return <i className="fa-solid fa-tree" />;

    case "Bungalow":
      return <i className="fa-solid fa-house" />;

    case "Townhouse":
      return <i className="fa-solid fa-house" />;

    case "Chalet":
      return <i className="fa-solid fa-house" />;

    case "Farm stay":
      return <i className="fa-solid fa-wheat-awn" />;

    case "Boutique hotel":
      return <i className="fa-solid fa-hotel" />;

    case "Boat":
      return <i className="fa-solid fa-anchor" />;

    case "Cottage":
      return <i className="fa-solid fa-house" />;

    case "Earth house":
      return <i className="fa-solid fa-house" />;

    case "Aparthotel":
      return <i className="fa-solid fa-hotel" />;

    case "Resort":
      return <i className="fa-solid fa-hotel" />;

    case "Tiny house":
      return <i className="fa-solid fa-house" />;

    case "Nature lodge":
      return <i className="fa-solid fa-leaf" />;

    case "Hotel":
      return <i className="fa-solid fa-hotel" />;

    case "Casa particular (Cuba)":
      return <i className="fa-solid fa-house" />;

    case "Barn":
      return <i className="fa-solid fa-wheat-awn" />;

    case "Hut":
      return <i className="fa-solid fa-house" />;

    case "Camper/RV":
      return <i className="fa-solid fa-caravan" />;

    case "Heritage hotel (India)":
      return <i className="fa-solid fa-hotel" />;

    case "Campsite":
      return <i className="fa-solid fa-campground" />;

    case "Houseboat":
      return <i className="fa-solid fa-water" />;

    case "Castle":
      return <i className="fa-solid fa-chess-rook"></i>;

    case "Train":
      return <i className="fa-solid fa-train" />;

    default:
      return <span></span>;
  }
};

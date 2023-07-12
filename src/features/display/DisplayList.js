import { Col, Row } from "reactstrap";
// import DisplayCard from "./DisplayCard";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectedFeaturedPromotion } from "../promotion/promotionsSlice";
import { selectFeaturedPartners } from "../partners/partnersSlice";


const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectedFeaturedPromotion(),
    selectFeaturedPartners(),
  ];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
          <Col md className="m-1" key={idx}>
            <AnimatedDisplayCard item={item} />
          </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
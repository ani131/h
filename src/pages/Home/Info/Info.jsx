import React from "react";
import PropTypes from "prop-types";
import Info from "./Info.css";

// const SectionTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: 700;
//   color: #fff;
//   margin-top: 0;
// `;

// const InfoSectionWrapper = styled.section`
//   width: 100%;
//   background-color: #040d20;
// `;

// const InfoContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 120px 0;
// `;

// const InfoTextWrapper = styled.div`
//   max-width: 500px;
//   text-align: left;
//   padding-right: 50px;
// `;

// const InfoTitle = styled.h2`
//   font-size: 48px;
//   font-weight: bold;
//   color: #fff;
//   margin-bottom: 16px;
// `;

// const InfoSubtitle = styled.p`
//   font-size: 24px;
//   color: #fff;
//   margin-bottom: 32px;
// `;

// const InfoImageWrapper = styled.div`
//   max-width: 500px;
//   width: 100%;
//   height: 100%;
// `;

// const InfoImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

{
  /* // <InfoSectionWrapper>
    //   <SectionTitle title="Section Title" />
    //   <InfoContainer>
    //     <InfoTextWrapper>
    //       <InfoTitle>Rocket Info</InfoTitle>
    //       <InfoSubtitle>
    //         WOWOWOW did u know u could blast off into the world of rocket
    //         science! Explore the latest advancements and discover the
    //         fascinating history of space travel.
    //       </InfoSubtitle>
    //     </InfoTextWrapper>
    //     <InfoImageWrapper>
    //       <InfoImage
    //         src="https://via.placeholder.com/500x500/FEFBFF/040D20/?text=Rocket+Image"
    //         alt="rocket"
    //       />
    //     </InfoImageWrapper>
    //   </InfoContainer>
    // </InfoSectionWrapper> */
}

const InfoSection = ({
  sectionTitle,
  infoTitle,
  infoSubtitle,
  imageUrl,
}) => {
  return (
    <section className="info-section-wrapper">
      <h1 className="section-title" title={sectionTitle}>
        {sectionTitle}
      </h1>
      <div className="info-container">
        <div className="info-text-wrapper">
          <h2 className="info-title">{infoTitle}</h2>
          <p className="info-subtitle">{infoSubtitle}</p>
        </div>
        <div className="info-image-wrapper">
          <img className="info-image" src={imageUrl} alt="helios" />
        </div>
      </div>
    </section>
  );
};

InfoSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  infoTitle: PropTypes.string.isRequired,
  infoSubtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default InfoSection;

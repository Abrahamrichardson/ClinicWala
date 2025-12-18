import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CURE_DATA } from "../data/CureData";
import "./FindCure.css";

export default function FindCure() {
  const { cureSlug } = useParams();
  const navigate = useNavigate();

  const cure = CURE_DATA[cureSlug];

  if (!cure) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Page Not Found</h2>
        <p>The requested cure is not available.</p>
      </div>
    );
  }

  const handleItemClick = (itemSlug) => {
    navigate(`/cure/${cureSlug}/${itemSlug}`);
  };

  return (
    <div className="cure-page">

      {/* Banner */}
      <div className="cure-banner">
        {cure.bannerImage && (
          <img
            src={cure.bannerImage}
            alt={cure.title}
            className="cure-banner-img"
          />
        )}
        <div className="cure-banner-overlay">
          <h1 className="cure-title text-center">{cure.title}</h1>
        </div>
      </div>

      <div className="container py-4">

        {cure.shortDescription && (
          <p className="text-muted mb-4 text-center">{cure.shortDescription}</p>
        )}

        {/* MAIN GRID */}
        <div className="row g-4">
          {cure.columns.map((column, colIndex) => (
            <div className="col-md-4" key={colIndex}>
              {column.sections.map((section) => (
                <div className="cure-section-box mb-4" key={section.title}>
                  <h5 className="cure-section-header">{section.title}</h5>

                  <ul className="list-unstyled m-0">
                    {section.items?.map((item) => (
                      <li
                        key={item.slug}
                        className="cure-list-item"
                        onClick={() => handleItemClick(item.slug)}
                      >
                        <span>{item.label}</span>
                        <span className="arrow">›</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

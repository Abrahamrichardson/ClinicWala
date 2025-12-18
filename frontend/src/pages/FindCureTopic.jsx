// src/pages/FindCureTopic.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { CURE_DATA } from "../data/CureData";
import "./FindCure.css";

export default function FindCureTopic() {
  const { cureSlug, topicSlug } = useParams();

  // Get main cure (Ayurveda / etc.)
  const cure = CURE_DATA[cureSlug];

  if (!cure) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Invalid Cure</h2>
        <p>The requested cure page does not exist.</p>
      </div>
    );
  }

  // Find topic details inside columns
  let selectedTopic = null;

  cure.columns.forEach((col) => {
    col.sections.forEach((section) => {
      section.items?.forEach((item) => {
        if (item.slug === topicSlug) {
          selectedTopic = {
            title: item.label,
            content: item.content || "Content coming soon.",
            section: section.title,
          };
        }
      });
    });
  });

  if (!selectedTopic) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Topic Not Found</h2>
        <p>This topic is not available under this cure.</p>
      </div>
    );
  }

  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb bg-transparent p-0">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/cure/${cureSlug}`} className="breadcrumb-link">
              {cure.title}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {selectedTopic.title}
          </li>
        </ol>
      </nav>

      {/* Topic Title */}
      <h2 className="topic-title mb-2">{selectedTopic.title}</h2>

      {/* Section Name */}
      <p className="text-primary fw-semibold mb-3">
        Category: {selectedTopic.section}
      </p>

      {/* Content Card */}
      <div className="topic-content-box p-4">
        <p className="topic-content-text">
          {selectedTopic.content}
        </p>
      </div>

    </div>
  );
}

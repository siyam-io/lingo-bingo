import React from "react";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/DAp_v7EH9AA",
    "https://www.youtube.com/embed/kJQjXAVEWt0?si=3yPis05PA67TRrbO" ,
    "https://www.youtube.com/embed/qIyhRvk7qlk?si=VsTNsqmrpoTTH8n6" ,
    "https://www.youtube.com/embed/FRV9fvWjMHA?si=CRV0Lx1WZYNZ6Vyj" ,
    "https://www.youtube.com/embed/lbDxhlPSMxs?si=UQAUhWZlQkzVGUnk" ,
    "https://www.youtube.com/embed/K6NSvBvQYBY?si=MNieqbEIKBxfUWg0",
    "https://www.youtube.com/embed/wwZgwnTIb58?si=CHWIvzlfCAj-ZFz7" ,
    "https://www.youtube.com/embed/Xdvd9h8mgJQ?si=sQXd-rgP2OZohvDc" ,
    "https://www.youtube.com/embed/AqfQQZVmTUw?si=HORSOPGjdWDCIBC9",
    "https://www.youtube.com/embed/JKL012",
    "https://www.youtube.com/embed/MNO345",
    "https://www.youtube.com/embed/PQR678",
  ];

  const handleStartLesson = () => {
    navigate("/lets-learn");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Learn with Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow"
              src={video}
              title={`Tutorial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          onClick={handleStartLesson}
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorials;

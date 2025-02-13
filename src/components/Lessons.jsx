import React, { useContext, useEffect } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Lessons = () => {
  const navigate = useNavigate();

  const lessons = [
    { lesson_no: 1 },
    { lesson_no: 2 },
    { lesson_no: 3 },
    { lesson_no: 4 },
    { lesson_no: 5 },
    { lesson_no: 6 },
    { lesson_no: 7 },
    { lesson_no: 8 },
    { lesson_no: 9 },
    { lesson_no: 10 },
  ];

  const handleLessonClick = (lesson_no) => {
    navigate(`/lesson/${lesson_no}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.lesson_no}
          onClick={() => handleLessonClick(lesson.lesson_no)}
          className="cursor-pointer bg-blue-100 text-center py-4 px-2 shadow rounded-lg"
        >
          <h3 className="text-xl font-bold text-blue-600">
            Lesson {lesson.lesson_no}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Lessons;

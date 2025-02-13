import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, closeModal, lesson }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;
  console.log(lesson);
  const handleBackToLesson = () => {
    closeModal();
    navigate(`/lesson/${lesson.lesson_no}`);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-box w-11/12 max-w-md bg-white p-6 rounded-lg">
        <h3 className="font-bold text-lg text-center">When to say</h3>
        <p className="py-4 text-center">{lesson?.when_to_say}</p>
        <div className="modal-action flex justify-center">
          <button
            className="btn btn-sm btn-outline"
            onClick={handleBackToLesson}
          >
            Back to Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

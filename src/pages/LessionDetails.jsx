import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import { FaSpeakerDeck } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";

const LessonDetails = () => {
  const lessons = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "es-ES"; 
    window.speechSynthesis.speak(utterance);
  }

  const openModal = (lesson) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Lessons Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`block p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                lesson.difficulty === "difficult"
                  ? "bg-red-100 border-l-4 border-red-500"
                  : "bg-green-100 border-l-4 border-green-500"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Lesson {lesson.lesson_no}
              </h3>
              <p className="text-gray-600 mt-2">
                <strong>Word:</strong> {lesson.word}
              </p>
              <p className="text-gray-600">
                <strong>Meaning:</strong> {lesson.meaning}
              </p>
              <p className="text-gray-600">
                <strong>Pronunciation:</strong> {lesson.pronunciation}
              </p>
              <p className="text-gray-600">
                <strong>Part of Speech:</strong> {lesson.part_of_speech}
              </p>

              <p className="text-gray-600 mt-2">
                <strong>Example:</strong> {lesson.example}
              </p>

              <p className="text-gray-600 mt-2">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(lesson)}
                    className="btn btn-sm block btn-outline text-center"
                  >
                    When to say
                  </button>
                  <p
                    className="btn bg-transparent btn-lg border-none"
                    onClick={() => pronounceWord(lesson.word)}
                  >
                    <GiSpeaker />
                  </p>
                </div>
              </p>
            </div>
          ))}
        </div>

        <div className="flex mt-5 items-center justify-center">
          <Link to={"/lets-learn"}>
            <button className="btn block bg-green-600 text-white">
              Back to Lesson
            </button>
          </Link>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        lesson={selectedLesson}
      />
    </section>
  );
};

export default LessonDetails;

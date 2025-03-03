import './App.css';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function App() {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [showfact, setShowfact] = useState(false);
  const [clueIndex, setClueIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [username, setUsername] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/getData')
      .then((response) => {
        response.json().then(data => {
          setData(data);
        });
      })
  }, []);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    if (data && data.length > 0) {
      if (selectedCity === data[questionIndex].city) {
        console.log("correct");
        setClueIndex(0);
        setCorrectAnswers((prevCount) => prevCount + 1);
      } else {
        setClueIndex((prevIndex) => Math.min(prevIndex + 1, data[questionIndex].clues.length - 1));
        console.log("wrong");
        if (clueIndex + 1 === data[questionIndex].clues.length) {
          setShowfact(true);
        }
      }
    }
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSelectedCity('');
    setShowfact(false);
    setClueIndex(0);
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setSelectedCity('');
    setShowfact(false);
    setClueIndex(0);
  };

  const handlePlayAgain = () => {
    setQuestionIndex(0);
    setSelectedCity('');
    setShowfact(false);
    setClueIndex(0);
    setCorrectAnswers(0);
  };

  const handleRegister = () => {
    if (username.trim() !== '') {
      setIsRegistered(true);
    }
  };

  const handleShare = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App bg-dark vh-100 d-flex justify-content-center align-items-center">
      <header className="App-header">
        <div className='container bg-transparent p-3 rounded-4 bg-opacity-50 col-12 col-xl-6 mb-2 gradientBorder' >
          <h1 className='transformer'> Guess the Country !! </h1>
        </div>

        {!isRegistered ? (
          <div className='container p-3 rounded bg-opacity-50 col-12 col-xl-10'>
            <h2 className='text-white'>Enter your username to start</h2>
            <input
              type="text"
              className='form-control'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <button onClick={handleRegister} className='btn btn-primary mt-3'>Register</button>
          </div>
        ) : (
          <div className='container p-3 rounded bg-opacity-50 col-12 col-xl-6  Gamecntr'>
            {correctAnswers === (data ? data.length : 0) ? (
              <div className='text-white'>
                <h2>Congratulations! Your Offer Letter is On the Way!!</h2>
                <button onClick={handlePlayAgain} className='btn btn-success mt-3'>Play Again</button>
                <button onClick={handleShare} className='btn btn-info mt-3 ms-2'>Challenge a Friend</button>
              </div>
            ) : (
              <div className='row'>
                <div className='col-12'>
                  <h2 className='text-white'> Clues </h2>
                  {data && <p className='text-white'><span>{clueIndex + 1} : </span>{data[questionIndex].clues[clueIndex]}</p>}
                </div>

                <div className='col-12'>
                  <h2 className='text-white'> Select a City </h2>
                  <select onChange={handleCityChange} className='form-select' value={selectedCity}>
                    <option value="">Select a city</option>
                    {data && data.map((item, index) => (
                      <option key={index} value={item.city}>{item.city}</option>
                    ))}
                  </select>
                </div>

                {showfact && <div className='col-12'>
                  <h2 className='text-white text-start'> The Funny Facts are </h2>
                  {data && <ul className='text-white'>
                    {data[questionIndex].fun_fact.map((fact, index) => (
                      <li className='text-start' key={index}>{fact}</li>
                    ))}
                  </ul>}
                </div>}

                {showfact && <div className='col-12'>
                  <h2 className='text-white text-start'> The Trivia is </h2>
                  {data && <ul className='text-white'>
                    {data[questionIndex].trivia.map((fact, index) => (
                      <li className='text-start' key={index}>{fact}</li>
                    ))}
                  </ul>}
                </div>}

                <div className='col-12'>
                  <button onClick={handlePreviousQuestion} className='btn btn-secondary mt-3' disabled={questionIndex === 0}>Previous</button>
                  <button onClick={handleNextQuestion} className='btn btn-primary mt-3 ms-2' disabled={!data || questionIndex === data.length - 1}>Next</button>
                  <button onClick={handlePlayAgain} className='btn btn-success mt-3 ms-2'>Play Again</button>
                  <button onClick={handleShare} className='btn btn-info mt-3 ms-2'>Challenge a Friend</button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="position-absolute top-0 end-0 p-3">
          <h2 className="text-white">Correct Answers: {correctAnswers}</h2>
        </div>
      </header>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Challenge a Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Invite your friends to play the game!</p>
          <p>My score is {correctAnswers}. Play here: http://localhost:3000/?invitedBy={username}</p>
          <img src="path_to_your_image.jpg" alt="Invite" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            const shareText = `Join me in this game! My score is ${correctAnswers}. Play here: http://localhost:3000/?invitedBy=${username}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            window.open(whatsappUrl, '_blank');
          }}>
            Share on WhatsApp
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

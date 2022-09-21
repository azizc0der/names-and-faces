import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import RefreshIcon from '@mui/icons-material/Refresh'
import '../game-component/Game.css'
import { useGameContext } from '../../context/GameContext'

const Answers = () => {
  let { people, currentPerson, setCurrentPerson, firstNames, lastNames, setFirstNames, setLastNames } = useGameContext()


  // people = people.sort(function(){ return Math.random() - 0.5})

  console.log(people)

  const nextPage = (e) => {
    e.preventDefault()
    setCurrentPerson((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > people?.length - 1) {
        nextPage = 1
      }
      return nextPage
    })
  }

  const prevPage = (e) => {
    e.preventDefault()
    setCurrentPerson((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 1) {
        prevPage = 1
      }
      return prevPage
    })
  }

  const firstPage = () => {
    setCurrentPerson(1)
  }

  const handleLastName = (e, index) => {
    setLastNames((lastNames) =>
      lastNames.map((oldValue, currentIndex) =>
        currentIndex === index ? e.target.value : oldValue,
      ),
    )
  }

  const handleFirstName = (e, index) => {
    setFirstNames((firstNames) =>
      firstNames.map((oldValue, currentIndex) =>
        currentIndex === index ? e.target.value : oldValue,
      ),
    )
  }

  return (
    <section className="people">
      <div className="people-image">
        {people?.map((person, index) => {
          if (index === currentPerson - 1) {
            return (
              <article key={index}>
                <img src={people[index]?.img} alt={people[index]?.firstName} />
                <form action="" className="form">
                  <input
                    type="text"
                    placeholder="FirstName"
                    value={firstNames[index]}
                    onChange={(e) => handleFirstName(e, index)}
                  />
                  <input
                    type="text"
                    placeholder="LastName"
                    value={lastNames[index]}
                    onChange={(e) => handleLastName(e, index)}
                  />
                </form>
              </article>
            )
          } else {
            return null
          }
        })}
      </div>
      <div className="indicator">
        <span>{currentPerson}</span>/<span>{people?.length}</span>
      </div>
      <div className="control-buttons">
        <SkipPreviousIcon
          className="first-button"
          onClick={firstPage}
          sx={{
            fontSize: '3rem',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '.8rem',
            padding: '.4rem',
            cursor: 'pointer',
          }}
        />
        <RefreshIcon
          className="refresh-button"
          onClick={() => {
            window.location.reload()
          }}
          sx={{
            fontSize: '3rem',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '.8rem',
            padding: '.4rem',
            cursor: 'pointer',
          }}
        />
        <ArrowBackIcon
          className="prev-button"
          onClick={prevPage}
          sx={{
            fontSize: '3rem',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '.8rem',
            padding: '.4rem',
            cursor: 'pointer',
          }}
        />
        <ArrowForwardIcon
          className="next-button"
          onClick={nextPage}
          sx={{
            fontSize: '3rem',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '.8rem',
            padding: '.4rem',
            cursor: 'pointer',
          }}
        />
      </div>
    </section>
  )
}

export default Answers
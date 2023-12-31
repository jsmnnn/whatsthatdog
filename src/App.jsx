import { useState } from 'react'
import DogCardList from './components/DogCardList';
import './App.css'

function App() {
  const cardData = [
    {
      id: 1,
      question: "Which breed is known for is know for its spotted coat and beloved Disney animated movie?", 
      answer: "Dalmation"
    },
    {
      id: 2,
      question: "This breed is know for its very curly coat",
      answer: "Poodle",
    },
    {
      id: 3,
      question: "This breed is know for its long, shiny coat",
      answer: "Shih Tzu",
    },
    {
      id: 4,
      question: "Which breed is well known for its unique blue-black tounge?",
      answer: "Chow Chow",
    },
    {
      id: 5,
      question: "Which breed is known for its powerful sense of smell?",
      answer: "Bloodhound",
    },
    {
      id: 6,
      question: "This breed is one of America's most popular dog breeds and sports a golden coat.",
      answer: "Golden Retriever",
    },
    {
      id: 7,
      question: "What breed is known for its love for the snow and sled-pulling skills?",
      answer: "Husky",
    },
    {
      id: 8,
      question: "This dog is often called a \"wiener dog\"!",
      answer: "Dachsund",
    },
    {
      id: 9,
      question: "This breed is known for helping herd sheep",
      answer: "Border Collie",
    },
    {
      id: 10,
      question: "Which dog is known for its pointy ears and hunting skills?",
      answer: "German Shepherd",
    }
  ]

  const [cards, setCards] = useState(cardData);
  
  return (
    <DogCardList dogcards = {cards} />
  )
}

export default App

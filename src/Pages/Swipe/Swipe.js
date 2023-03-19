import { Button, Container, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SwipeCard from './SwipeCard';
import TinderCard from 'react-tinder-card'
import './Swipe.css'

const cardList = [
    {
        id: 1,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#55ccff'
    },
    {
        id: 2,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#e8e8e8'
    },
    {
        id: 3,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#0a043c'
    },
    {
        id: 4,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: 'black'
    }
];

const cardList2 = [
    {
        id: 5,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#55ccff'
    },
    {
        id: 6,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#e8e8e8'
    },
    {
        id: 7,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: '#0a043c'
    },
    {
        id: 8,
        image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
        color: 'black'
    }
];


export default function Swipe() {

    const [lastDirection, setLastDirection] = useState()
    const [cards, setCards] = useState([])
    const [currentIndex, setCurrentIndex] = useState()

    console.log(cards)

    const swiped = (direction, nameToDelete, id) => {
        console.log(id)
        console.log('direction: ' + direction)
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)

    }

    const outOfFrame = (name) => {
        console.log(cards)
        console.log(name + ' left the screen!')
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 1) {
            setCards([...cardList2])
            setCurrentIndex(cardList2.length - 1)
            console.log(1)
        }
    }

    const handleClickButton = (direction) => {
        console.log(direction)
        setCards([...cards.filter(card => card.id !== cards[currentIndex].id)])
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) {
            setCards([...cardList2])
            setCurrentIndex(cardList2.length - 1)
            console.log(1)
        }
    }

    useEffect(() => {
        setCards([...cardList])
        setCurrentIndex(cardList.length - 1)
    }, [])

    return (
        <Container maxWidth='100%' centerContent={false} background='#F5F5F4'>
            <Flex justify="center" align="center" height="100%">
                {cards.map((card) => (
                    <TinderCard className='swipe' key={card.id} onSwipe={(direction) => swiped(direction, "Harry", card.id)} onCardLeftScreen={() => outOfFrame("Harry")} preventSwipe={['up', 'down']}>
                        <SwipeCard className="card" />
                    </TinderCard>
                ))}
                <Flex position="absolute" bottom="15%" gap="5">
                    <Button onClick={() => {
                        handleClickButton("left")
                    }} colorScheme="red">Swipe Left</Button>
                    <Button onClick={() => {
                        handleClickButton("right")
                    }}
                        colorScheme="green">Swipe Right</Button>
                </Flex>
            </Flex>
        </Container>
    )
}

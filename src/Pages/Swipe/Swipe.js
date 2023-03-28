import { Button, Container, Flex, Text } from '@chakra-ui/react'
import React, { Fragment, useEffect, useState } from 'react'
import SwipeCard from './SwipeCard';
import TinderCard from 'react-tinder-card'
import './Swipe.css'
import { useDispatch } from 'react-redux';
import { getProfileByCourseAction, swipeAction } from '../../Redux/Actions/UserActions';
import { useParams } from 'react-router-dom';

export default function Swipe() {

    // const { swipeUser } = useSelector(state => state.UserReducer)

    const [haveSwiped, setHavedSwipe] = useState([])

    const [swipeUser, setSwipeUser] = useState([])

    const dispatch = useDispatch()

    const { course } = useParams()

    const swiped = (direction) => {
        console.log(direction)
    }

    const outOfFrame = (direction, username) => {
        haveSwiped.push(username)
        setHavedSwipe([...haveSwiped])
        setSwipeUser([...swipeUser.filter(user => user.username !== username || !haveSwiped.includes(user.username))])
        dispatch(swipeAction(direction, username))
    }

    const handleClickButton = (direction, username) => {
        haveSwiped.push(username)
        setHavedSwipe([...haveSwiped])
        setSwipeUser([...swipeUser.filter(user => user.username !== username || !haveSwiped.includes(user.username))])
        dispatch(swipeAction(direction, username))
    }

    useEffect(() => {
        dispatch(getProfileByCourseAction(course, setSwipeUser))
    }, [dispatch, course])

    return (
        <Container maxWidth='100%' centerContent={false} background='#F5F5F4'>
            <Flex justify="center" align="center" height="100%">
                {swipeUser.filter(user => !haveSwiped.includes(user.username))?.length !== 0 ?
                    swipeUser?.filter(user => !haveSwiped.includes(user.username))?.map((user) => (
                        <Fragment key={user.username}>
                            <TinderCard className='swipe' onSwipe={(direction) => swiped(direction)} onCardLeftScreen={(direction) => outOfFrame(direction, user.username)} preventSwipe={['up', 'down']}>
                                <SwipeCard user={user} className="card" />
                            </TinderCard>
                            <Flex position="absolute" bottom="2%" gap="5">
                                <Button onClick={() => {
                                    handleClickButton("left", user.username)
                                }} colorScheme="red">Swipe Left</Button>
                                <Button onClick={() => {
                                    handleClickButton("right", user.username)
                                }}
                                    colorScheme="green">Swipe Right</Button>
                            </Flex>
                        </Fragment>
                    ))
                    :
                    <Text fontSize="2xl" fontWeight="bold">You ran out of users in this module</Text>}


            </Flex>
        </Container>
    )
}

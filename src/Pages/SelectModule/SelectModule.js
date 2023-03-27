import Searchbar from '../../Components/Searchbar/Searchbar'
import Module from '../../Components/Module/Module'
import { Container, Grid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesAction } from '../../Redux/Actions/CourseAction'
import { getProfileAction } from '../../Redux/Actions/UserActions'

const SelectModule = () => {
  const { courses } = useSelector((state) => state.CourseReducer)

  const dispatch = useDispatch()

  const displayCourseSelection = () => {
    return courses.map((course) => {

      return (
        <Module course={course} key={course.course} />
      )
    })
  }

  useEffect(() => {
    dispatch(getAllCoursesAction())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(getProfileAction())
  }, [dispatch])

  return (
    <Container maxWidth='100%' background='#F5F5F4'>
      <Searchbar />
      {/*Modules*/}
      <Grid templateColumns='repeat(2, 1fr)' gap='10px'>
        {displayCourseSelection()}
      </Grid>
    </Container>
  )
}

export default SelectModule

import { SET_USER_INFO } from '../Constants/UserConstants'

const stateDefault = {
  userInfo: {
    name: 'Harry Tran',
    school: 'NTU',
    course: 'CSC',
    yearOfStudy: 2,
    CGPA: 5,
    bio: "Hi! Swipe left if you don't like me! I love coding together",
    skills: [
      'Java',
      'Python',
      'ExpressJS',
      'NextJS',
      'PostgreSQL',
      'DevOps',
      'HTML',
      'CSS',
      'Agile',
      'Waterfall',
    ],
    lookingFor: ['SC3040', 'Hackaton'],
    linkedin: 'linkedin.com/in/que-an-tran/',
    github: 'github.com/tquean15012003',
    telegram: '@yayharryyy',
    instagram: '_harry_tran',
  },
}

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return { ...state, userInfo: action.userInfo }
    }
    default:
      return { ...state }
  }
}

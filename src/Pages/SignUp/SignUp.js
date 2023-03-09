import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

export default function SignUp() {
  const [hiddenPassword, setHiddenPassword] = useState(true)
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email!'), //email
      username: Yup.string() //username
        .min(8, 'Minimum 8 characters required')
        .max(20, 'Maximum 20 characters only'),
      password: Yup.string()
        .min(8, 'At least 8 characters!')
        .max(30, 'At most 30 characters!')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,30})/,
          'At least one uppercase, one lowercase and one number'
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),

    onSubmit: (values) => {
      // TO-DO
      // dispatch after setting up redux

      console.log(values)
    },
  })

  return (
    <Box height='80vh'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box>
          <form onSubmit={formik.handleSubmit}>
            {/* Email */}
            <Box marginBottom='4'>
              <InputGroup
                size='lg'
                backgroundColor='gray.200'
                borderRadius='7px'
              >
                <InputLeftElement
                  backgroundColor='gray.200'
                  borderRight='1px'
                  borderColor='gray.400'
                  borderLeftRadius='7px'
                  shadow=''
                >
                  <svg
                    style={{ width: '50px', height: '50px' }}
                    width='68'
                    height='68'
                    viewBox='0 0 68 68'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M50.4207 58.6667C49.4522 55.6544 47.3179 52.9926 44.3489 51.0941C41.38 49.1957 37.7423 48.1666 34 48.1666C30.2577 48.1666 26.62 49.1957 23.6511 51.0941C20.6821 52.9926 18.5478 55.6544 17.5793 58.6667'
                      stroke='#7D8790'
                      strokeWidth='2'
                    />
                    <circle
                      cx='34'
                      cy='28.3334'
                      r='8.5'
                      stroke='#7D8790'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </InputLeftElement>
                <Input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  id='email'
                  type='email'
                  placeholder='Email'
                  marginLeft='3'
                />
              </InputGroup>
              {formik.touched.email && formik.errors.email && (
                <Text color='white' fontWeight='bold'>
                  {formik.errors.email}
                </Text>
              )}
            </Box>

            {/* Username */}
            <Box marginBottom='4'>
              <InputGroup
                size='lg'
                backgroundColor='gray.200'
                borderRadius='7px'
              >
                <InputLeftElement
                  backgroundColor='gray.200'
                  borderRight='1px'
                  borderColor='gray.400'
                  borderLeftRadius='7px'
                  shadow=''
                >
                  <svg
                    style={{ width: '50px', height: '50px' }}
                    width='68'
                    height='68'
                    viewBox='0 0 68 68'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M50.4207 58.6667C49.4522 55.6544 47.3179 52.9926 44.3489 51.0941C41.38 49.1957 37.7423 48.1666 34 48.1666C30.2577 48.1666 26.62 49.1957 23.6511 51.0941C20.6821 52.9926 18.5478 55.6544 17.5793 58.6667'
                      stroke='#7D8790'
                      strokeWidth='2'
                    />
                    <circle
                      cx='34'
                      cy='28.3334'
                      r='8.5'
                      stroke='#7D8790'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </InputLeftElement>
                <Input
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  id='username'
                  type='username'
                  placeholder='Username'
                  marginLeft='3'
                />
              </InputGroup>
              {formik.touched.username && formik.errors.username && (
                <Text color='white' fontWeight='bold'>
                  {formik.errors.username}
                </Text>
              )}
            </Box>

            {/* Password */}
            <Box marginBottom='4'>
              <InputGroup
                size='lg'
                backgroundColor='gray.200'
                borderRadius='7px'
              >
                <InputLeftElement
                  backgroundColor='gray.200'
                  borderRight='1px'
                  borderColor='gray.400'
                  borderLeftRadius='7px'
                >
                  <svg
                    style={{ width: '50px', height: '50px' }}
                    width='68'
                    height='68'
                    viewBox='0 0 68 68'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='25.5'
                      cy='39.6667'
                      r='11.3333'
                      stroke='#7D8790'
                    />
                    <path
                      d='M34 31.1667L43.9167 21.25M48.1667 17L43.9167 21.25M43.9167 21.25L51 28.3333'
                      stroke='#7D8790'
                      strokeLinecap='round'
                    />
                  </svg>
                </InputLeftElement>
                <Input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  id='password'
                  type={hiddenPassword ? 'password' : 'text'}
                  placeholder='Password'
                  marginLeft='3'
                />

                <InputRightElement
                  backgroundColor='gray.200'
                  borderRightRadius='7px'
                >
                  {hiddenPassword ? (
                    <svg
                      onClick={() => {
                        setHiddenPassword(!hiddenPassword)
                      }}
                      style={{
                        width: '50px',
                        height: '35px',
                        cursor: 'pointer',
                      }}
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
                        stroke='#222222'
                      />
                      <path
                        d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
                        stroke='#222222'
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => {
                        setHiddenPassword(!hiddenPassword)
                      }}
                      style={{
                        width: '50px',
                        height: '35px',
                        cursor: 'pointer',
                      }}
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z'
                        fill='#222222'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z'
                        fill='#222222'
                      />
                      <path d='M5 2L21 18' stroke='#222222' />
                    </svg>
                  )}
                </InputRightElement>
              </InputGroup>
              {formik.touched.password && formik.errors.password && (
                <Text color='white' fontWeight='bold'>
                  {formik.errors.password}
                </Text>
              )}
            </Box>

            {/* Confirm Password */}
            <Box marginBottom='4'>
              <InputGroup
                size='lg'
                backgroundColor='gray.200'
                borderRadius='7px'
              >
                <InputLeftElement
                  backgroundColor='gray.200'
                  borderRight='1px'
                  borderColor='gray.400'
                  borderLeftRadius='7px'
                >
                  <svg
                    style={{ width: '50px', height: '50px' }}
                    width='68'
                    height='68'
                    viewBox='0 0 68 68'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='25.5'
                      cy='39.6667'
                      r='11.3333'
                      stroke='#7D8790'
                    />
                    <path
                      d='M34 31.1667L43.9167 21.25M48.1667 17L43.9167 21.25M43.9167 21.25L51 28.3333'
                      stroke='#7D8790'
                      strokeLinecap='round'
                    />
                  </svg>
                </InputLeftElement>
                <Input
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  id='confirmPassword'
                  type={hiddenConfirmPassword ? 'password' : 'text'}
                  placeholder='Confirm Your Password'
                  marginLeft='3'
                />
                <InputRightElement
                  backgroundColor='gray.200'
                  borderRightRadius='7px'
                >
                  {hiddenConfirmPassword ? (
                    <svg
                      onClick={() => {
                        setHiddenConfirmPassword(!hiddenConfirmPassword)
                      }}
                      style={{
                        width: '50px',
                        height: '35px',
                        cursor: 'pointer',
                      }}
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
                        stroke='#222222'
                      />
                      <path
                        d='M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z'
                        stroke='#222222'
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => {
                        setHiddenConfirmPassword(!hiddenConfirmPassword)
                      }}
                      style={{
                        width: '50px',
                        height: '35px',
                        cursor: 'pointer',
                      }}
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z'
                        fill='#222222'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z'
                        fill='#222222'
                      />
                      <path d='M5 2L21 18' stroke='#222222' />
                    </svg>
                  )}
                </InputRightElement>
              </InputGroup>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <Text color='white' fontWeight='bold'>
                    {formik.errors.confirmPassword}
                  </Text>
                )}
            </Box>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ marginRight: '25px' }}>
                <Text fontSize='lg' fontweight='bold' color='white'>
                  Already have an account?
                </Text>
                <Text
                  onClick={() => {
                    navigate('/login', { replace: false })
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    transitionDuration: '0.2s',
                  }}
                  fontSize='lg'
                  fontWeight='bold'
                  color='white'
                  cursor='pointer'
                >
                  Login here
                </Text>
              </div>
              <Box
                _hover={{
                  transform: 'translateY(-2px)',
                  transitionDuration: '0.2s',
                }}
              >
                <button
                  type='submit'
                  style={{
                    padding: '7px 25px',
                    color: 'white',
                    backgroundColor: '#ED9B59',
                    borderRadius: '10px',
                  }}
                >
                  <Text
                    fontSize='xl'
                    fontWeight='medium'
                  >
                    Register
                  </Text>
                </button>
              </Box>
            </div>
          </form>
        </Box>
      </div>
    </Box>
  )
}

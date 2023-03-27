import Select from 'react-select';
import {
  Box,
  Text,
  Input,
  Flex,
  Avatar,
  Textarea,
  Select as SelectChakra,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesAction } from '../../Redux/Actions/CourseAction';
import { useEffect } from 'react';
import { imageSrc, skillList } from '../../Settings/Settings';
import * as Yup from 'yup'
import { updateProfileAction } from '../../Redux/Actions/UserActions';

const ProfileSetting = () => {

  const { courses } = useSelector(state => state.CourseReducer)

  const { userInfo } = useSelector(state => state.UserReducer)


  const courseOptions = courses.map((course) => {
    return {
      value: course.course,
      label: course.course
    }
  })

  const skillOptions = skillList.map((skill) => {
    return {
      value: skill,
      label: skill
    }
  })

  const dispatch = useDispatch()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userInfo.name ? userInfo.name : "",
      school: userInfo.school,
      yearOfStudy: userInfo.yearOfStudy,
      course: userInfo.course,
      CGPA: userInfo.CGPA ? userInfo.CGPA : 0,
      bio: userInfo.bio ? userInfo.bio : "",
      skills: userInfo.skills,
      lookingFor: userInfo.lookingFor,
      linkedin: userInfo.linkedin ? userInfo.linkedin : "",
      github: userInfo.github ?  userInfo.github : "",
      telegram: userInfo.telegram ? userInfo.telegram : "",
      instagram: userInfo.instagram ? userInfo.instagram : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .required("Required!"),
      school: Yup.string()
      .required("Required!"),
      yearOfStudy: Yup.number()
      .required("Required!"),
      course: Yup.string()
      .required("Required!"),
      CGPA: Yup.number()
      .required("Required!")
      .integer()
      .min(0)
      .max(5),
      bio: Yup.string()
      .required("Required!"),
      linkedin: Yup.string()
      .required("Required!"),
      github: Yup.string()
      .required("Required!"),
      telegram: Yup.string()
      .required("Required!"),
      instagram: Yup.string()
      .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updateProfileAction(values))
    },
  });

  useEffect(() => {
    dispatch(getAllCoursesAction())
  }, [dispatch])


  return (
    <Box m="50px">
      <form onSubmit={formik.handleSubmit}>
        {/* Basic information */}
        <Flex mb="3" justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl">
            Basic Information
          </Text>
          <Box>
            <button
              type="submit"
              style={{
                padding: "7px 25px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Text color="#FF0000" fontSize="2xl" fontWeight="medium">
                Save
              </Text>
            </button>
          </Box>
        </Flex>
        {/* Profile picture and other information */}
        <Flex alignItems="center" justifyContent="space-between">
          <Avatar
            src={imageSrc}
            name="Harry Tran"
            size="2xl"
            marginLeft="20px"
            cursor="pointer"
          />
          <Box width="75%">

            {/* Name and school */}
            <Flex marginBottom="10px" justifyContent="space-between" alignItems="center">
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="10%"
              >
                Name
              </Text>
              <Input
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Jeannette Lee"
                width="30%"
                mr="15%"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="15%"
              >
                School
              </Text>
              <SelectChakra
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                width="30%"
                id="school"
                value={formik.values.school}
                onChange={formik.handleChange}
              >
                <option value="NTU">NTU</option>
                <option value="NUS">NUS</option>
                <option value="SMU">SMU</option>
                <option value="SUTD">SUTD</option>
                <option value="SUSS">SUSS</option>
                <option value="Other">Other</option>
              </SelectChakra>
            </Flex>
            {/* Gender and study year */}
            <Flex marginBottom="10px" justifyContent="space-between" alignItems="center">
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="10%"
              >
                Course
              </Text>
              <SelectChakra
                width="30%"
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                mr="15%"
                id="course"
                value={formik.values.course}
                onChange={formik.handleChange}
              >
                <option value="AERO">AERO</option>
                <option value="BIE">BIE</option>
                <option value="CBE">CBE</option>
                <option value="CE">CE</option>
                <option value="CEE">CEE</option>
                <option value="CSC">CSC</option>
                <option value="EEE">EEE</option>
                <option value="ENE">ENE</option>
                <option value="IEM">IEM</option>
                <option value="MAT">MAT</option>
                <option value="ME">ME</option>
              </SelectChakra>
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="15%"
              >
                Study year
              </Text>
              <SelectChakra
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                width="30%"
                id="yearOfStudy"
                value={formik.values.yearOfStudy}
                onChange={formik.handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </SelectChakra>
            </Flex>
            {/* Course and CGPA */}
            <Flex marginBottom="10px" justifyContent="start" alignItems="center">

              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="10%"
              >
                CGPA
              </Text>
              <Input
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="4"
                width="30%"
                mr="15%"
                id="CGPA"
                type="number"
                min={0}
                max={5}
                value={formik.values.CGPA}
                onChange={formik.handleChange}
              />
            </Flex>
          </Box>
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />
        {/* Your bio */}
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl">
            Your bio
          </Text>
          <Textarea
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.bio}
            onChange={formik.handleChange}
            required
            id="bio"
            placeholder="Bio"
          />
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />
        {/* Skills */}
        <Flex marginBottom="10px" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl">
            Looking for
          </Text>
          <Box width="75%">
            <Flex justifyContent="space-between" alignItems="center">
              <Select
                width="85%"
                value={courseOptions.filter(course => formik.values.lookingFor.includes(course.value))}
                isMulti
                name="lookingFor"
                options={courseOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  const newLookingFor = e.map((course) => { return course.value })
                  formik.setFieldValue("lookingFor", newLookingFor)
                }}
              />
            </Flex>
          </Box>
        </Flex>
        <Flex marginBottom="10px" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl">
            Skills
          </Text>
          <Box width="75%">
            <Flex justifyContent="space-between" alignItems="center">
              <Select
                width="85%"
                value={skillOptions.filter(skill => formik.values.skills.includes(skill.value))}
                isMulti
                name="skills"
                options={skillOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => {
                  const newSkills = e.map((skill) => { return skill.value })
                  formik.setFieldValue("skills", newSkills)


                }}
              />
            </Flex>
          </Box>
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />
        {/* External links */}
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl">
            External links
          </Text>
          <Box width="75%">
            {/* LinkedIn */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                LinkedIn
              </Text>
              <Input
                width="85%"
                size="lg"
                backgroundColor="white"
                borderRadius="7px"
                marginBottom="4"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                required
                id="linkedin"
                type="text"
                placeholder="linkedin.com/..."
              />
            </Flex>
            {/* GitHub */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                GitHub
              </Text>
              <Input
                width="85%"
                size="lg"
                backgroundColor="white"
                borderRadius="7px"
                marginBottom="4"
                value={formik.values.github}
                onChange={formik.handleChange}
                required
                id="github"
                type="text"
                placeholder="github.com/..."
              />
            </Flex>
          </Box>
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />

        {/* Contact */}
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl">
            Contact
          </Text>
          <Box width="75%">
            {/* Telegram */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                Telegram handle
              </Text>
              <Input
                width="80%"
                size="lg"
                backgroundColor="white"
                borderRadius="7px"
                marginBottom="4"
                value={formik.values.telegram}
                onChange={formik.handleChange}
                required
                id="telegram"
                type="text"
                placeholder="yayharry"
              />
            </Flex>
            {/* Instagram */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                Instagram handle
              </Text>
              <Input
                width="80%"
                size="lg"
                backgroundColor="white"
                borderRadius="7px"
                marginBottom="4"
                value={formik.values.instagram}
                onChange={formik.handleChange}
                required
                id="instagram"
                type="text"
                placeholder="_harry_tran"
              />
            </Flex>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default ProfileSetting;

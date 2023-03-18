import {
  Box,
  Text,
  Input,
  Flex,
  Avatar,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import img from "../../Assets/ProfileImages/HarryPic.jfif"; //test image

const ProfileSetting = () => {
  const formik = useFormik({
    initialValues: {
      bio: "",
      company: "",
      role: "",
      date: "",
      description: "",
      linkedIn: "",
      gitHub: "",
      other: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            src={img}
            name="Harry Tran"
            size="2xl"
            marginLeft="20px"
            cursor="pointer"
          />
          <Box width="75%">
            {/* Gender and study year */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="10%"
              >
                Gender
              </Text>
              <Select
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                width="30%"
                mr="15%"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>

              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="15%"
              >
                Study year
              </Text>
              <Select
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                width="30%"
              >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
              </Select>
            </Flex>
            {/* Course and CGPA */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="10%"
              >
                Course
              </Text>
              <Select
                width="30%"
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
                mr="15%"
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
              </Select>
              <Text
                color="#606162"
                fontWeight="bold"
                fontSize="xl"
                mb="3"
                width="15%"
              >
                CGPA
              </Text>
              <Select
                width="30%"
                variant="outline"
                fontSize="lg"
                backgroundColor="white"
                placeholder="Select"
              >
                <option value="first">4.50-5.00</option>
                <option value="upper">4.00-4.49</option>
                <option value="lower">3.50-3.99</option>
                <option value="third">3.00-3.49</option>
                <option value="pass">2.00-2.99</option>
              </Select>
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
            placeholder="Your bio"
          />
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />
        {/* Experience */}
        <Box>
          <Text fontWeight="bold" fontSize="2xl">
            Experience
          </Text>
          <Flex justifyContent="space-between">
            <Text color="#606162" fontWeight="bold" fontSize="xl">
              Experience 1
            </Text>
            <Box width="75%">
              {/* Company */}
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                  Company
                </Text>
                <Input
                  width="85%"
                  size="lg"
                  backgroundColor="white"
                  borderRadius="7px"
                  marginBottom="4"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  required
                  id="company"
                  type="text"
                  placeholder="Company"
                />
              </Flex>
              {/* Role */}
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                  Role
                </Text>
                <Input
                  width="85%"
                  size="lg"
                  backgroundColor="white"
                  borderRadius="7px"
                  marginBottom="4"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  required
                  id="role"
                  type="text"
                  placeholder="Role"
                />
              </Flex>
              {/* Date */}
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                  Date
                </Text>
                <Input
                  width="85%"
                  size="lg"
                  backgroundColor="white"
                  borderRadius="7px"
                  marginBottom="4"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  required
                  id="other"
                  type="date"
                />
              </Flex>
              {/* Description */}
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                  Description
                </Text>
                <Textarea
                  width="85%"
                  size="lg"
                  backgroundColor="white"
                  borderRadius="7px"
                  marginBottom="4"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  required
                  id="description"
                  placeholder="Description"
                />
              </Flex>
            </Box>
          </Flex>
          <Flex justifyContent="flex-end">
            <button
              type="button"
              style={{
                padding: "7px 25px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Text color="#606162" fontSize="lg" fontWeight="medium">
                + Experience
              </Text>
            </button>
          </Flex>
        </Box>
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
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                required
                id="linkedIn"
                type="url"
                placeholder="LinkedIn"
              />
            </Flex>
            {/* Github */}
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
                value={formik.values.gitHub}
                onChange={formik.handleChange}
                required
                id="gitHub"
                type="url"
                placeholder="GitHub"
              />
            </Flex>
            {/* Other */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
                Other
              </Text>
              <Input
                width="85%"
                size="lg"
                backgroundColor="white"
                borderRadius="7px"
                marginBottom="4"
                value={formik.values.other}
                onChange={formik.handleChange}
                required
                id="other"
                type="url"
                placeholder="Other"
              />
            </Flex>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default ProfileSetting;

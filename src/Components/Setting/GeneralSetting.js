import { Box, Text, Input, Flex } from "@chakra-ui/react";
import { useFormik } from "formik";

const GeneralSetting = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      location: "",
      skills: "",
      goals: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box m="50px">
      <form onSubmit={formik.handleSubmit}>
        {/* Account Settings */}
        <Flex mb="3" justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl">
            Account Settings
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
        {/* Email */}
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
            Email
          </Text>
          <Input
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
            id="email"
            type="email"
            placeholder="Email"
          />
        </Flex>
        {/* Phone number */}
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
            Phone number
          </Text>
          <Input
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            required
            id="phoneNumber"
            type="tel"
            placeholder="Phone number"
          />
        </Flex>
        <hr
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            borderColor: "#000000",
          }}
        />
        {/* Discovery Settings */}
        <Text mb="3" fontWeight="bold" fontSize="2xl">
          Discovery Settings
        </Text>
        {/* Location */}
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
            Location
          </Text>
          <Input
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.location}
            onChange={formik.handleChange}
            required
            id="location"
            type="text"
            placeholder="Location"
          />
        </Flex>
        {/* Looking for skills */}
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
            Looking for skills
          </Text>
          <Input
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.skills}
            onChange={formik.handleChange}
            required
            id="skills"
            type="text"
            placeholder="Skills"
          />
        </Flex>
        {/* Goals */}
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#606162" fontWeight="bold" fontSize="xl" mb="3">
            Goals
          </Text>
          <Input
            width="75%"
            size="lg"
            backgroundColor="white"
            borderRadius="7px"
            marginBottom="4"
            value={formik.values.goals}
            onChange={formik.handleChange}
            required
            id="goals"
            type="text"
            placeholder="Goals"
          />
        </Flex>
      </form>
    </Box>
  );
};

export default GeneralSetting;

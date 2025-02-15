import PageContainer from "@/components/PageContainer";
import ResumeSection from "@/components/ResumeSection";
import SkillGroup from "@/components/SkillGroup";
import WorkPosition from "@/components/WorkPosition";
import Education from "@/components/Education";
import {
  Box,
  Tag,
  Heading,
  VStack,
  Icon,
  Text,
  Image,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import getPortfolioData from "@/lib/portfolio";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaUser,
  FaFilePdf,
} from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { GiTechnoHeart } from "react-icons/gi";

export default function Resume({
  basics,
  work,
  interests,
  languages,
  skills,
  education,
}) {
  return (
    <PageContainer>
      <VStack align="start" w="100%" spacing={8}>
        <VStack w="100%" align="center" spacing={10}>
          <Heading as="h1">Resume</Heading>
          <Image boxSize="128px" src={basics.image} borderRadius="full" />
          <Button
            size="lg"
            variant="solid"
            backgroundColor="tomato"
            textColor="white"
            onClick={() =>
              window.open("https://gitconnected.com/angelhodar/resume")
            }
            leftIcon={<Icon as={FaFilePdf} w={7} h={7} />}
          >
            View as PDF
          </Button>
        </VStack>
        <ResumeSection title="About" icon={FaUser}>
          <Text>{basics.summary}</Text>
        </ResumeSection>
        <ResumeSection title="Skills" icon={FaCode}>
          <SkillGroup
            displayName="Frontend"
            groupName="front"
            skills={skills}
          />
          <SkillGroup displayName="Backend" groupName="back" skills={skills} />
          <SkillGroup
            displayName="Databases"
            groupName="database"
            skills={skills}
          />
          <SkillGroup
            displayName="Graphics Engines"
            groupName="engine"
            skills={skills}
          />
          <SkillGroup displayName="Tools" groupName="tool" skills={skills} />
        </ResumeSection>
        <ResumeSection title="Education" icon={FaUserGraduate}>
          <VStack spacing={10}>
            {education.map((item, i) => (
              <Education key={i} {...item} />
            ))}
          </VStack>
        </ResumeSection>
        <ResumeSection title="Experience" icon={FaBriefcase}>
          <VStack spacing={10}>
            {work.map((position, i) => (
              <WorkPosition key={i} {...position} />
            ))}
          </VStack>
        </ResumeSection>
        <ResumeSection title="Languages" icon={IoLanguageOutline}>
          <Wrap spacing="10px">
            {languages.map(({ language, fluency }, i) => (
              <WrapItem key={i}>
                <Box rounded="lg" borderWidth="2px">
                  <Text m="10px">
                    {language}: {fluency}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </ResumeSection>
        <ResumeSection title="Interests" icon={GiTechnoHeart}>
          <Wrap spacing="10px">
            {interests.map(({ name }, i) => (
              <WrapItem key={i}>
                <Tag colorScheme="blue" variant="outline">
                  {name}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </ResumeSection>
      </VStack>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const {
    basics,
    work,
    skills,
    education,
    languages,
    interests,
  } = await getPortfolioData();
  return { props: { basics, work, skills, languages, interests, education } };
}

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import type { NextPage } from "next";

import Button from "components/atoms/Button";
import {
  GitHubIcon,
  TwitterIcon,
  InstagramIcon,
} from "components/atoms/IconButton";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Grid from "components/layout/Grid";
import Layout from "components/templates/Layout";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const ViewMore = styled(Button)`
  cursor: pointer;
  border-radius: 9999px;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const HomeMain = styled(Box)`
  position: relative;
  background: ${(props) => props.theme.colors.homeBackground};
  min-height: 100vh;
`;

const HomeContainer = styled(Box)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
`;

const HomeProfile = styled(Flex)``;

const HomeProfileImage = styled(Image)`
  border-radius: 50%;
`;

const HomeProfileIntro = styled(Flex)``;

const HomeTopic = styled(Grid)`
  align-items: center;
  justify-items: center;
`;

const HomeSubTopic = styled(Grid)`
  align-items: center;
  justify-items: center;
`;

const BlogBox = styled(Flex)`
  text-align: center;
  background: linear-gradient(to left, #4568dc, #b06ab3);
  padding: 2.4rem 1.6rem 2rem;
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  align-items: center;
  justify-content: center;
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const WorksBox = styled(Flex)`
  text-align: center;
  background: linear-gradient(to left, #a770ef, #cf8bf3, #fdb99b);
  padding: 2.4rem 1.6rem 2rem;
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  align-items: center;
  justify-content: center;
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const TwitterBox = styled(Box)`
  background: linear-gradient(to left, #36d1dc, #5b86e5);
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const TwitterIconBox = styled(Flex)`
  position: relative;
  aspect-ratio: 1/1;
  align-items: center;
`;

const InstagramBox = styled(Box)`
  background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const InstagramIconBox = styled(Flex)`
  position: relative;
  aspect-ratio: 1/1;
  align-items: center;
`;

const GithubBox = styled(Box)`
  background: linear-gradient(to left, #333333, #444444, #555555);
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const GithubIconBox = styled(Flex)`
  position: relative;
  aspect-ratio: 1/1;
  align-items: center;
`;

const AboutBox = styled(Box)`
  background: linear-gradient(to left, #cccccc, #bbbbbb, #999999);
  border-radius: 22px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

const AboutIconBox = styled(Flex)`
  position: relative;
  aspect-ratio: 1/1;
  align-items: center;
`;
const BlogIcon = styled(Box)``;
const WorksIcon = styled(Box)``;
const Home: NextPage = () => {
  return (
    <Layout>
      <HomeMain>
        <HomeContainer>
          <HomeProfile justifyContent="start">
            <Flex paddingRight={2}>
              <HomeProfileImage
                src="/image/daiki.jpg"
                width="100%"
                height="100%"
                alt="thumbnail"
              ></HomeProfileImage>
            </Flex>
            <HomeProfileIntro
              paddingLeft={2}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
            >
              <Text
                fontSize={{ base: "large", lg: "extraLarge" }}
                letterSpacing={{ base: 5, md: 5 }}
                lineHeight={{ base: 3, md: 3 }}
                color={"white"}
              >
                d4ichan@IT企業勤めの社会人
              </Text>
              <Link href="/about" passHref>
                <Anchor as="a" fontWeight="bold" color={"white"}>
                  <ViewMore fontSize={"small"} paddingBottom={0} paddingTop={0}>
                    About Detail
                  </ViewMore>
                </Anchor>
              </Link>
            </HomeProfileIntro>
          </HomeProfile>
          <HomeTopic
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gridGap="1.5rem"
            paddingTop="2.0rem"
          >
            <BlogBox width={"100%"}>
              <Link href="/blog/category/all/1" passHref>
                <Anchor as="a" width={"100%"}>
                  <Box paddingTop={2} paddingBottom={2}>
                    <BlogIcon color={"white"}>
                      <svg
                        width="160"
                        height="160"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 18H17V16H7V18Z" fill="currentColor" />
                        <path d="M17 14H7V12H17V14Z" fill="currentColor" />
                        <path d="M7 10H11V8H7V10Z" fill="currentColor" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                          fill="currentColor"
                        />
                      </svg>
                    </BlogIcon>
                    <Box>
                      <Box>
                        <Text
                          fontSize={"large"}
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          Blog
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize={"extraSmall"}
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          ブログ
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Anchor>
              </Link>
            </BlogBox>
            <WorksBox width={"100%"}>
              <Link href="/works" passHref>
                <Anchor as="a">
                  <Box paddingTop={2} paddingBottom={2}>
                    <WorksIcon color={"white"}>
                      <svg
                        width="160"
                        height="160"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 12C9.44769 12 9 12.4477 9 13C9 13.5523 9.44769 14 10 14H14C14.5522 14 15 13.5523 15 13C15 12.4477 14.5522 12 14 12H10Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 2C2.34314 2 1 3.34314 1 5V19C1 20.6569 2.34314 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34314 21.6569 2 20 2H4ZM20 4H4C3.44769 4 3 4.44769 3 5V8H21V5C21 4.44769 20.5522 4 20 4ZM3 19V10H21V19C21 19.5523 20.5522 20 20 20H4C3.44769 20 3 19.5523 3 19Z"
                          fill="currentColor"
                        />
                      </svg>
                    </WorksIcon>
                    <Box>
                      <Box>
                        <Text
                          fontSize={"large"}
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          Works
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontSize={"extraSmall"}
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          制作実績
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Anchor>
              </Link>
            </WorksBox>
          </HomeTopic>
          <HomeSubTopic
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gridGap="1.5rem"
            paddingTop="1.5rem"
          >
            <TwitterBox width={"100%"}>
              <Link href="/works" passHref>
                <TwitterIconBox
                  alignItems={"center"}
                  justifyContent={"center"}
                  as="a"
                >
                  <TwitterIcon size={60} color={"white"}></TwitterIcon>
                  <Text
                    fontSize={"extraSmall"}
                    fontWeight={"bold"}
                    color={"white"}
                    paddingLeft={"1rem"}
                  >
                    Twitter
                  </Text>
                </TwitterIconBox>
              </Link>
            </TwitterBox>
            <InstagramBox width={"100%"}>
              <Link href="/works" passHref>
                <InstagramIconBox
                  alignItems={"center"}
                  justifyContent={"center"}
                  as="a"
                >
                  <InstagramIcon size={60} color={"white"}></InstagramIcon>
                  <Text
                    fontSize={"extraSmall"}
                    fontWeight={"bold"}
                    color={"white"}
                    paddingLeft={"1rem"}
                  >
                    Instagram
                  </Text>
                </InstagramIconBox>
              </Link>
            </InstagramBox>
            <GithubBox width={"100%"}>
              <Link href="/works" passHref>
                <GithubIconBox
                  alignItems={"center"}
                  justifyContent={"center"}
                  as="a"
                >
                  <GitHubIcon size={60} color={"white"}></GitHubIcon>
                  <Text
                    fontSize={"extraSmall"}
                    fontWeight={"bold"}
                    color={"white"}
                    paddingLeft={"1rem"}
                  >
                    GitHub
                  </Text>
                </GithubIconBox>
              </Link>
            </GithubBox>
            <AboutBox width={"100%"}>
              <Link href="/works" passHref>
                <AboutIconBox
                  alignItems={"center"}
                  justifyContent={"center"}
                  as="a"
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                  <Text
                    fontSize={"extraSmall"}
                    fontWeight={"bold"}
                    color={"white"}
                    paddingLeft={"1rem"}
                  >
                    About
                  </Text>
                </AboutIconBox>
              </Link>
            </AboutBox>
          </HomeSubTopic>
        </HomeContainer>
      </HomeMain>
    </Layout>
  );
};

export default Home;

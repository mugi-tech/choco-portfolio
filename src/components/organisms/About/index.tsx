import styled from "styled-components";

import Button from "../../atoms/Button";
import { GitHubIcon, TwitterIcon, InstagramIcon } from "../../atoms/IconButton";
import ShapeImage, { ShapeImageProps } from "../../atoms/ShapeImage";
import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import Flex from "../../layout/Flex";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ViewMore = styled(Button)`
  cursor: pointer;
  border-radius: 9999px;
  &:hover {
    background-color: white;
    color: #49a7fc;
    border: 2px solid #49a7fc;
  }
`;

const About = ({ src, shape, width, height }: ShapeImageProps) => {
  return (
    <Box backgroundColor="azule">
      <Flex
        justifyContent="center"
        paddingTop={2}
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={1}
        marginRight={4}
        marginLeft={4}
      >
        <Text variant="extraLarge">About</Text>
      </Flex>
      <Flex
        justifyContent="center"
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={2}
        marginRight={4}
        marginLeft={4}
      >
        <Text variant="small">私について</Text>
      </Flex>
      <Flex
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          paddingRight={{ base: 0, md: 3 }}
          paddingBottom={{ base: 0, md: 4 }}
          justifyContent="center"
        >
          <ShapeImage
            src={src}
            shape={shape}
            width={width}
            height={height}
          ></ShapeImage>
        </Flex>
        <Flex flexDirection="column" paddingLeft={{ base: 0, md: 3 }}>
          <Flex justifyContent={{ base: "center", md: "normal" }}>
            <Text variant="extraLarge" paddingTop={{ base: 3, md: 4 }}>
              d4ichan@IT企業勤めの社会人
            </Text>
          </Flex>
          <Flex justifyContent={{ base: "center", md: "normal" }}>
            <Text
              variant="medium"
              textAlign={{ base: "center", md: "start" }}
              paddingTop={3}
            >
              休日に趣味でコーディングやゲームを嗜む社会人３年目。
              <br />
              実業務ではAWSを使ったSaaSアプリケーション開発、基幹系システムの保守開発など担当。
              <br />
              現在は作ってみたいWebアプリがあるので、Reactなどのフロント周りを勉強中です！
            </Text>
          </Flex>
          <Flex
            justifyContent={{ base: "center", md: "normal" }}
            flexDirection={{ base: "column", md: "row" }}
            paddingTop={2}
          >
            <Flex
              flexDirection="row"
              justifyContent={{ base: "center", md: "normal" }}
            >
              <Box paddingRight={2} paddingTop={{ base: 0, md: 1 }}>
                <nav>
                  <Anchor
                    as="a"
                    href="https://github.com/dychan-prog-works"
                    target="_blank"
                  >
                    <GitHubIcon size={22} />
                  </Anchor>
                </nav>
              </Box>
              <Box paddingRight={2} paddingTop={{ base: 0, md: 1 }}>
                <nav>
                  <Anchor
                    as="a"
                    href="https://github.com/dychan-prog-works"
                    target="_blank"
                  >
                    <TwitterIcon size={22} />
                  </Anchor>
                </nav>
              </Box>
              <Box paddingRight={0} paddingTop={{ base: 0, md: 1 }}>
                <nav>
                  <Anchor
                    as="a"
                    href="https://github.com/dychan-prog-works"
                    target="_blank"
                  >
                    <InstagramIcon size={22} />
                  </Anchor>
                </nav>
              </Box>
            </Flex>

            <Flex
              paddingTop={{ base: 2, md: 0 }}
              paddingLeft={{ base: 0, md: 2 }}
              justifyContent={{ base: "center", md: "normal" }}
            >
              <nav>
                <Anchor
                  as="a"
                  href="https://github.com/dychan-prog-works"
                  target="_blank"
                >
                  <ViewMore>View More</ViewMore>
                </Anchor>
              </nav>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;

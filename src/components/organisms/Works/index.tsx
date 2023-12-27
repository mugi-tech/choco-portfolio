import styled from "styled-components";

import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import Flex from "../../layout/Flex";
import WorksSwiper from "../../molecules/WorksSwiper";

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
export interface worksDataProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  revisedAt: string;
  thumbnail: string;
}

export type WorksDataListProps = {
  worksDataList: worksDataProps[];
};

const Works = ({ worksDataList }: WorksDataListProps) => {
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
        <Text variant="extraLarge">Works</Text>
      </Flex>
      <Flex
        justifyContent="center"
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={2}
        marginRight={4}
        marginLeft={4}
      >
        <Text variant="small">作品集</Text>
      </Flex>
      {worksDataList.length !== 0 ? (
        <WorksSwiper worksDataList={worksDataList} />
      ) : (
        <Box>
          <Text>Not Found WorksData...</Text>
        </Box>
      )}
      <Flex padding={2} marginRight={4} marginLeft={4} justifyContent="center">
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
    </Box>
  );
};

export default Works;

import Link from "next/link";
import styled from "styled-components";

import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import Flex from "../../layout/Flex";
import Grid from "../../layout/Grid";
import Card, { BlogCardDataProps } from "../../molecules/BlogCard";

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

export type BlogCardDataListProps = {
  blogCardDataList: BlogCardDataProps[];
};

const Blog = ({ blogCardDataList }: BlogCardDataListProps) => {
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
        <Text variant="extraLarge">Blog</Text>
      </Flex>
      <Flex
        justifyContent="center"
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={2}
        marginRight={4}
        marginLeft={4}
      >
        <Text variant="small">ブログ</Text>
      </Flex>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
        }}
        gridGap="32px"
        paddingRight={2}
        paddingLeft={2}
        marginRight={4}
        marginLeft={4}
      >
        {blogCardDataList.length !== 0 ? (
          blogCardDataList.map((blogCardData: BlogCardDataProps, i) => {
            return (
              <Link href={`/blog/${blogCardData.id}`} key={i}>
                <a>
                  <Card
                    id={blogCardData.id}
                    title={blogCardData.title}
                    tags={blogCardData.tags}
                    publishedAt={blogCardData.publishedAt}
                    revisedAt={blogCardData.revisedAt}
                    thumbnail={blogCardData.thumbnail}
                  />
                </a>
              </Link>
            );
          })
        ) : (
          <Box>
            <Text>Not Found BlogData...</Text>
          </Box>
        )}
      </Grid>
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

export default Blog;

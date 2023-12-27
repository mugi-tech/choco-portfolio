import styled from "styled-components";

import { MarkdownDataProps } from "libs/md/api";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Grid from "components/layout/Grid";
import BlogCard from "components/molecules/BlogCard";

type BlogContainerProps = {
  blogContainerProps: MarkdownDataProps[];
};
const BlogContainerBox = styled(Box)`
  margin: 0 auto;
  padding-top: 1.5rem;
  max-width: 780px;
`;

const BlogContainerGrid = styled(Grid)`
  grid-gap: 2.2em 1.8em;
`;

const BlogContainer = ({ blogContainerProps }: BlogContainerProps) => {
  return (
    <BlogContainerBox>
      <BlogContainerGrid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        {blogContainerProps.length !== 0 ? (
          blogContainerProps.map((markdownData: MarkdownDataProps, i) => {
            return (
              <BlogCard
                title={markdownData.frontMatter.title}
                date={markdownData.frontMatter.date}
                category={markdownData.frontMatter.category}
                tags={markdownData.frontMatter.tags}
                description={markdownData.frontMatter.description}
                emoji={markdownData.frontMatter.emoji}
                id={markdownData.id}
                key={i}
              />
            );
          })
        ) : (
          <Box>
            <Text>Not Found BlogData...</Text>
          </Box>
        )}
      </BlogContainerGrid>
    </BlogContainerBox>
  );
};
export default BlogContainer;

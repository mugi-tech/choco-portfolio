import { ParsedUrlQuery } from "querystring";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import styled from "styled-components";

import BlogContainer from "components/containers/BlogContainer";
import Box from "components/layout/Box";
import Pagenation from "components/molecules/Pagenation";
import Layout from "components/templates/Layout";
import { getTagName } from "libs/common/convert";
import { getTagPaths, PAGE_SIZE } from "libs/common/getPath";
import { MarkdownDataProps, getMarkdownDataByTag } from "libs/md/api";

interface Params extends ParsedUrlQuery {
  slug: string[];
}

/**
 * コンポーネントに渡すPropsの型
 */
interface Props {
  markdownDataList: MarkdownDataProps[];
  tag: string;
  currentPage: number;
  totalPage: number;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getTagPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const tag = context.params!.slug[0];
  const currentPage = Number(context.params!.slug[1]);

  const markdownDataList = getMarkdownDataByTag(tag);
  const totalPage = Math.ceil(markdownDataList.length / PAGE_SIZE);
  const slicedMarkdownDataList = markdownDataList.slice(
    PAGE_SIZE * (currentPage - 1),
    PAGE_SIZE * currentPage
  );
  return {
    props: {
      markdownDataList: slicedMarkdownDataList,
      tag: tag,
      currentPage: currentPage,
      totalPage: totalPage,
    },
  };
};
const BlogTagMain = styled(Box)`
  position: relative;
  background: ${(props) => props.theme.colors.homeBackground};
  min-height: 100vh;
`;

const BlogTagContainer = styled(Box)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
`;
const TagNameBox = styled(Box)``;
const TagName = styled.h1`
  margin: 0;
  padding: 1.5rem 0 0 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.text};
`;
const Blog: NextPage<Props> = (props) => {
  const { markdownDataList, tag, currentPage, totalPage } = props;
  return (
    <Layout>
      <BlogTagMain>
        <BlogTagContainer>
          <TagNameBox>
            <TagName>{getTagName(tag)}</TagName>
          </TagNameBox>
          <BlogContainer blogContainerProps={markdownDataList} />
        </BlogTagContainer>
      </BlogTagMain>
      <Pagenation
        pathType={"tag"}
        path={tag}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </Layout>
  );
};
export default Blog;

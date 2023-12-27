import { ParsedUrlQuery } from "querystring";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import styled from "styled-components";

import BlogContainer from "components/containers/BlogContainer";
import Box from "components/layout/Box";
import CategoryNav from "components/molecules/CategoryNav";
import Pagenation from "components/molecules/Pagenation";
import Layout from "components/templates/Layout";
import { getCategoryName } from "libs/common/convert";
import { getCategoryPaths, PAGE_SIZE } from "libs/common/getPath";
import {
  MarkdownDataProps,
  getMarkdownDataByCategory,
  getAllMarkdownData,
} from "libs/md/api";

interface Params extends ParsedUrlQuery {
  slug: string[];
}

/**
 * コンポーネントに渡すPropsの型
 */
interface Props {
  markdownDataList: MarkdownDataProps[];
  category: string;
  currentPage: number;
  totalPage: number;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getCategoryPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const category = context.params!.slug[0];
  const currentPage = Number(context.params!.slug[1]);

  let markdownDataList = [];
  if (category === "all") {
    markdownDataList = getAllMarkdownData();
  } else {
    markdownDataList = getMarkdownDataByCategory(category);
  }
  const totalPage = Math.ceil(markdownDataList.length / PAGE_SIZE);
  const slicedMarkdownDataList = markdownDataList.slice(
    PAGE_SIZE * (currentPage - 1),
    PAGE_SIZE * currentPage
  );
  return {
    props: {
      markdownDataList: slicedMarkdownDataList,
      category: category,
      currentPage: currentPage,
      totalPage: totalPage,
    },
  };
};
const BlogCategoryMain = styled(Box)`
  position: relative;
  background: ${(props) => props.theme.colors.homeBackground};
  min-height: 100vh;
`;

const BlogCategoryContainer = styled(Box)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
`;
const CategoryNameBox = styled(Box)``;
const CategoryName = styled.h1`
  margin: 0;
  padding: 1.5rem 0 0 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.text};
`;
const Blog: NextPage<Props> = (props) => {
  const { markdownDataList, category, currentPage, totalPage } = props;
  return (
    <Layout>
      <BlogCategoryMain>
        <BlogCategoryContainer>
          <CategoryNav currentCategory={category}></CategoryNav>
          <CategoryNameBox>
            <CategoryName>{getCategoryName(category)}</CategoryName>
          </CategoryNameBox>
          <BlogContainer blogContainerProps={markdownDataList} />
        </BlogCategoryContainer>
      </BlogCategoryMain>
      <Pagenation
        pathType={"category"}
        path={category}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </Layout>
  );
};
export default Blog;

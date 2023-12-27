import { ParsedUrlQuery } from "querystring";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MdEditNote } from "react-icons/md";
import styled from "styled-components";
import "zenn-content-css";
import twemoji from "twemoji";

import Badge from "components/atoms/Badge";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Layout from "components/templates/Layout";
import { convertDateFormat } from "libs/common/convert";
import {
  MarkdownDataProps,
  getMarkdownDataById,
  getMarkdownDataIds,
} from "libs/md/api";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = {
  content: MarkdownDataProps;
};

const BlogMain = styled(Box)`
  position: relative;
  background: ${(props) => props.theme.colors.homeBackground};
  min-height: 100vh;
`;

const BlogContainer = styled(Box)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
  border-top: 2px solid ${(props) => props.theme.colors.cardBackground};
  border-bottom: 2px solid ${(props) => props.theme.colors.cardBackground};
  color: white;
`;
const BlogHeaderContainer = styled(Flex)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const BlogTitle = styled.h1`
  margin: 0 0 1rem 0;
  display: block;
  font-weight: 700;
  font-size: 40px;
  color: white;
`;
const BlogImageBox = styled(Box)`
  position: relative;
`;

const BlogImageEmoji = styled.p`
  position: relative;
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .emoji {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 500px) {
    min-height: 190px;
  }
`;

const TagArea = styled(Flex)``;
const TagBox = styled(Flex)``;

/**
 * 生成する全てのブログ記事の静的ページのパスを生成し、getStaticPropsに渡す
 */
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // 全てのブログ記事(markdown)のID(content配下のフォルダ名)を取得する
  const ids = getMarkdownDataIds();
  const paths = ids.map((id) => {
    return {
      params: id,
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false, //pathに含まれないURLにアクセスした際に404ページを表示する
  };
};

/**
 * 静的ページ生成に必要なデータを生成し、コンポーネントにpropsとして渡す
 */
export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const content = getMarkdownDataById(context.params!.id);
  return {
    props: {
      content: content,
    },
    revalidate: 10,
  };
};

const Blog: NextPage<Props> = (props) => {
  const { content } = props;
  const emoji = twemoji.parse(content.frontMatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg",
  });
  return (
    <Layout>
      <BlogMain>
        <BlogHeaderContainer>
          <BlogImageBox width="100%">
            <BlogImageEmoji
              dangerouslySetInnerHTML={{
                __html: emoji,
              }}
            />
          </BlogImageBox>
        </BlogHeaderContainer>
        <BlogContainer>
          <Flex alignItems={"center"}>
            <MdEditNote />
            <Text paddingRight={1} color={"white"}>
              公開:{convertDateFormat(content.frontMatter.date)}
            </Text>
          </Flex>
          <BlogTitle>{content.frontMatter.title}</BlogTitle>
          <TagArea paddingBottom={1}>
            {content.frontMatter.tags.map((tag, i) => {
              return (
                <TagBox paddingRight={1} display="inline-block" key={i}>
                  <Badge href={`/blog/${tag}/1`}>{tag}</Badge>
                </TagBox>
              );
            })}
          </TagArea>

          <Box
            className="znc"
            paddingTop={2}
            dangerouslySetInnerHTML={{ __html: content.data }}
          />
        </BlogContainer>
      </BlogMain>
    </Layout>
  );
};
export default Blog;

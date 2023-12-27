import Link from "next/link";
import { MdEditNote } from "react-icons/md";
import styled from "styled-components";

import {
  convertDateFormat,
  getCategoryName,
  getTagPath,
  getImageColorByCategory,
} from "libs/common/convert";
import Badge from "components/atoms/Badge";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

export type BlogCardDataProps = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  emoji: string;
  id: string;
};

const BlogCardContainer = styled(Flex)`
  position: relative;
  flex-direction: column;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 8px -2px #000a3c1a;
  overflow: hidden;
  transition: transform 0.2s ease;
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-2px) scale(1.02);
  }
`;

const BlogCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-underline-offset: 0.2rem;
`;

const BlogCardCategory = styled(Box)`
  font-weight: 600;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  padding: 6px 6px;
`;

const BlogCardImageBox = styled(Flex)`
  justify-content: center;
  align-items: center;
  font-size: 46px;
  line-height: 1.5;
`;

const BlogCardImage = styled.p`
  margin-block-start: 1.2rem;
  margin-block-end: 1.2rem;
`;

const BlogCardDateBox = styled(Flex)`
  padding: 0.3rem 0.7rem 0 0.7rem;
`;

const BlogCardDateIconBox = styled(Flex)`
  align-items: center;
`;

const BlogCardDate = styled(Text)`
  font-weight: 700;
  color: white;
`;

const BlogCardDescriptionBox = styled(Flex)`
  padding: 0rem 0.7rem 0.3rem 0.7rem;
  flex-direction: column;
  overflow-wrap: break-word;
`;

const BlogCardDescription = styled(Text)`
  font-weight: 700;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: white;

  /*IE対策*/
  line-height: 1.5em;
  max-height: 4.5em;
`;

const BlogCardTagsBox = styled(Box)`
  padding: 0 0.7rem 0 0.7rem;
`;

const BlogCardTags = styled(Box)`
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
  cursol: pointer;
`;

const BlogCard = (props: BlogCardDataProps) => {
  const { title, date, category, tags, emoji, id } = props;
  return (
    <BlogCardContainer>
      <Link href={`/blog/${id}`}>
        <BlogCardWrapper>
          <BlogCardImageBox background={getImageColorByCategory(category)}>
            <BlogCardCategory>
              <Badge shape="square" category={category}>
                {getCategoryName(category)}
              </Badge>
            </BlogCardCategory>
            <BlogCardImage
              dangerouslySetInnerHTML={{
                __html: emoji,
              }}
            ></BlogCardImage>
          </BlogCardImageBox>
          <BlogCardDateBox>
            <BlogCardDateIconBox>
              <MdEditNote color="white" />
            </BlogCardDateIconBox>
            <BlogCardDate fontSize={"extraSmall"}>
              {convertDateFormat(date)}
            </BlogCardDate>
          </BlogCardDateBox>
          <BlogCardDescriptionBox>
            <BlogCardDescription>{title}</BlogCardDescription>
          </BlogCardDescriptionBox>
          <BlogCardTagsBox display={{ base: "none", md: "inline" }}>
            {tags.map((tag, index) => {
              return (
                <BlogCardTags display={"inline-block"} key={index}>
                  <Badge shape="circle" href={`/blog/tag/${getTagPath(tag)}/1`}>
                    {tag}
                  </Badge>
                </BlogCardTags>
              );
            })}
          </BlogCardTagsBox>
        </BlogCardWrapper>
      </Link>
    </BlogCardContainer>
  );
};

export default BlogCard;

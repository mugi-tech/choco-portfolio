import Link from "next/link";
import styled from "styled-components";
import twemoji from "twemoji";

import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

const Nav = styled.nav`
  display: block;
  margin: 0;
`;

const CategoryList = styled.ul`
  display: flex;
  justify-content: start;
  padding-inline-start: 0;
`;

const CategoryBox = styled.li`
  width: 70px;
  height: 70px;
  margin: 0px 20px 0px 0px;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

const CategoryAnchor = styled.a`
  text-decoration: none;
  transition: all 0.2s ease 0s;
`;

const CategoryImageBox = styled(Flex)`
  padding: 2px;
  background: ${(props) => props.theme.colors.categoryImageBackground};
  border-radius: 50%;
  position: relative;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.colors.categoryImageBackground};

  &.active {
    border: 3px solid ${(props) => props.theme.colors.categoryImageBorder};
  }
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

const BlogImageEmoji = styled.p`
  position: relative;
  text-align: center;
  min-height: 30px;
  display: flex;
  .emoji {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 500px) {
    min-height: 30px;
  }
`;

const CategoryNameBox = styled(Box)`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.text};
`;

type CategoryNavProps = {
  currentCategory: string;
};

const CategoryNav = (props: CategoryNavProps) => {
  return (
    <Nav>
      <CategoryList>
        <CategoryBox>
          <Link href="/blog/category/all/1" passHref>
            <CategoryAnchor>
              <CategoryImageBox
                className={props.currentCategory === "all" ? "active" : ""}
              >
                <BlogImageEmoji
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse("🗃️", {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </CategoryImageBox>
              <CategoryNameBox>All</CategoryNameBox>
            </CategoryAnchor>
          </Link>
        </CategoryBox>
        <CategoryBox>
          <Link href="/blog/category/develop/1" passHref>
            <CategoryAnchor>
              <CategoryImageBox
                className={props.currentCategory === "develop" ? "active" : ""}
              >
                <BlogImageEmoji
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse("🖥️", {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </CategoryImageBox>
              <CategoryNameBox>Develop</CategoryNameBox>
            </CategoryAnchor>
          </Link>
        </CategoryBox>
        <CategoryBox>
          <Link href="/blog/category/design/1" passHref>
            <CategoryAnchor>
              <CategoryImageBox
                className={props.currentCategory === "design" ? "active" : ""}
              >
                <BlogImageEmoji
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse("🎨", {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </CategoryImageBox>
              <CategoryNameBox>Design</CategoryNameBox>
            </CategoryAnchor>
          </Link>
        </CategoryBox>
        <CategoryBox>
          <Link href="/blog/category/learning/1" passHref>
            <CategoryAnchor>
              <CategoryImageBox
                className={props.currentCategory === "learning" ? "active" : ""}
              >
                <BlogImageEmoji
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse("📝", {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </CategoryImageBox>
              <CategoryNameBox>Learning</CategoryNameBox>
            </CategoryAnchor>
          </Link>
        </CategoryBox>
        <CategoryBox>
          <Link href="/blog/category/note/1" passHref>
            <CategoryAnchor>
              <CategoryImageBox
                className={props.currentCategory === "note" ? "active" : ""}
              >
                <BlogImageEmoji
                  dangerouslySetInnerHTML={{
                    __html: twemoji.parse("🗒️", {
                      folder: "svg",
                      ext: ".svg",
                    }),
                  }}
                />
              </CategoryImageBox>
              <CategoryNameBox>Note</CategoryNameBox>
            </CategoryAnchor>
          </Link>
        </CategoryBox>
      </CategoryList>
    </Nav>
  );
};

export default CategoryNav;

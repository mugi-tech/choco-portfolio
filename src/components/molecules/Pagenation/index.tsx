import Link from "next/link";
import styled from "styled-components";

import Text from "components/atoms/Text";
import Flex from "components/layout/Flex";

type PagenationProps = {
  path: string;
  pathType: "category" | "tag";
  currentPage: number;
  totalPage: number;
};

const PagenationBox = styled(Flex)`
  justify-content: center;
`;
const Anchor = styled.a`
  text-decoration: none;
  transition: all 0.2s ease 0s;
`;
const NextBox = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  width: 30px;
  height: 30px;
  &.active {
    display: none;
  }
`;

const BackBox = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  &.active {
    display: none;
  }
`;

const PageNumberBox = styled(Flex)`
  background: ${(props) => props.theme.colors.pagenationBackground};
  position: relative;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 0.5rem;
  &.active {
    background: ${(props) => props.theme.colors.pagenationActiveBackground};
  }
`;

const PAGE_MAX = 5;
const getPagenation = (currentPage: number, totalPage: number) => {
  const pages = [];
  let start = currentPage - (PAGE_MAX - 1) / 2;
  let end = currentPage + (PAGE_MAX - 1) / 2;

  if (start <= 0) {
    end = PAGE_MAX;
    start = 1;
  }
  if (totalPage <= end) {
    end = totalPage;
    if (totalPage > PAGE_MAX) {
      start = totalPage - (PAGE_MAX - 1);
    } else {
      start = 1;
    }
  }
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
};

const Pagenation = ({
  path,
  pathType,
  currentPage,
  totalPage,
}: PagenationProps) => {
  const pagesList = getPagenation(currentPage, totalPage);
  return (
    <PagenationBox>
      <Link href={`/blog/${pathType}/${path}/${currentPage - 1}`} passHref>
        <Anchor>
          <BackBox className={currentPage === 1 ? "active" : ""}>
            <Text textAlign={"center"} fontSize="small">
              {"<"}
            </Text>
          </BackBox>
        </Anchor>
      </Link>
      {pagesList.map((page: number) => (
        <Link href={`/blog/${pathType}/${path}/${page}`} passHref key={page}>
          <Anchor>
            <PageNumberBox className={page === currentPage ? "active" : ""}>
              <Text textAlign={"center"} fontSize="small">
                {page.toString()}
              </Text>
            </PageNumberBox>
          </Anchor>
        </Link>
      ))}
      <Link href={`/blog/${pathType}/${path}/${currentPage + 1}`} passHref>
        <Anchor>
          <NextBox className={totalPage === currentPage ? "active" : ""}>
            <Text textAlign={"center"} fontSize="small">
              {">"}
            </Text>
          </NextBox>
        </Anchor>
      </Link>
    </PagenationBox>
  );
};

export default Pagenation;

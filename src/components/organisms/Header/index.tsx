import Link from "next/link";
import styled from "styled-components";

import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

// ヘッダーのルート
const HeaderRoot = styled.header`
  height: 60px;
  padding-top: 1.25rem;
  position: sticky;
  top: -1px;
  z-index: 9999;
  backdrop-filter: blur(20px);
`;
// ナビゲーション
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[8]};
  }
`;

// ナビゲーションのリンク
const NavLink = styled.span`
  display: inline;
`;

// アンカー
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderMain = styled(Flex)`
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 780px;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderRoot>
      <HeaderMain>
        <Nav as="nav" height="40px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <Text
                as="a"
                variant="extraLarge"
                fontWeight="bold"
                color={"white"}
              >
                choco.dev
              </Text>
            </Link>
          </NavLink>
        </Nav>
        <Nav as="nav" height="40px" alignItems="center">
          <NavLink>
            <Box display={{ base: "none", lg: "block" }}>
              <Link href="/about" passHref>
                <Anchor
                  as="a"
                  fontSize="mediumLarge"
                  fontWeight="bold"
                  color={"white"}
                >
                  About
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: "none", lg: "block" }}>
              <Link href="/blog" passHref>
                <Anchor
                  as="a"
                  fontSize="mediumLarge"
                  fontWeight="bold"
                  color={"white"}
                >
                  Blog
                </Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
      </HeaderMain>
    </HeaderRoot>
  );
};

export default Header;

import styled from "styled-components";

import Text from "../../atoms/Text";
import Flex from "../../layout/Flex";

const FooterRoot = styled.footer`
  background: ${(props) => props.theme.colors.homeBackground};
`;

const FooterMain = styled(Flex)`
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  max-width: 780px;
  justify-content: center;
`;

/**
 * フッター
 */
const Footer = () => {
  return (
    <FooterRoot>
      <FooterMain>
        <Text color={"white"}>© 2022 Choco.com</Text>
      </FooterMain>
    </FooterRoot>
  );
};

export default Footer;

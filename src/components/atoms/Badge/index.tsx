import { ReactNode } from "react";

import Link from "next/link";
import styled from "styled-components";

import { getBadgeColorByCategory } from "libs/common/convert";
import Text from "components/atoms/Text";

type Shape = "circle" | "square";
type Props = {
  children: ReactNode;
  href?: string;
};
export type BadgeProps = Props & { shape?: Shape } & { category?: string };

const BadgeTag = styled(Text)<{ shape?: Shape; category?: string }>`
  border-radius: ${({ shape }) => (shape === "circle" ? "9999px" : "5px")};
  cursor: pointer;
  background: ${({ category }) =>
    category ? getBadgeColorByCategory(category) : "#7f5af0"};
  &: hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1em);
  }
`;

/**
 * propsでhrefを渡すとLink付きのBadgeとなります。
 */
const Badge = (props: BadgeProps) => {
  const { children, shape, href, category } = props;
  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <a>
            <BadgeTag
              paddingRight={1}
              paddingLeft={1}
              fontSize="extraSmall"
              color="white"
              display="inline-block"
              shape={shape}
              category={category}
            >
              {children}
            </BadgeTag>
          </a>
        </Link>
      ) : (
        <BadgeTag
          paddingRight={1}
          paddingLeft={1}
          fontSize="extraSmall"
          color="white"
          display="inline-block"
          shape={shape}
          category={category}
        >
          {children}
        </BadgeTag>
      )}
    </>
  );
};

export default Badge;

import React, { useEffect, useState, useRef, useCallback } from "react";

import styled from "styled-components";

import Text from "components/atoms/Text";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";

export interface DropdownItem {
  value: string | null;
  label?: string;
}

interface DropdownItemProps {
  item: DropdownItem;
}

const Item = styled(Flex)`
  &:hover {
    background-color: gray;
  }
`;
const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props;

  return (
    <Item alignItems="center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Item>
  );
};

const DropdownRoot = styled(Flex)`
  position: relative;
  align-items: center;
  display: block;
`;
const DropdownButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  background-color: white;
`;

const DropdownMenu = styled(Box)`
  background-color: #ffffff;
  border: ${({ theme }) => theme.colors.border};
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 30%;
  z-index: 1000;
`;

const DropdownOption = styled(Box)`
  padding: 8px 12px 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

interface SelectIconProps {
  isOpen?: boolean;
}

const SelectIcon = (props: SelectIconProps) => {
  const attr = props.isOpen ? "scale(1, -1)" : "";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="22"
      height="22"
      className="icon"
      transform={attr}
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity="0.87"></path>
      <path d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"></path>
    </svg>
  );
};

interface DropdownProps {
  /**
   * ドロップダウンの選択肢
   */
  options: DropdownItem[];
  /**
   * ドロップダウンの値
   */
  value?: string;
}

/**
 * ドロップダウン
 */
const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpenValue] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      // 自分自身をクリックした場合は何もしない
      if (dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll("*");

        for (let i = 0; i < elems.length; i++) {
          if (elems[i] == e.target) {
            return;
          }
        }
      }

      setIsOpenValue(false);
    },
    [dropdownRef]
  );

  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen);
    e.stopPropagation();
  };

  useEffect(() => {
    // 画面外のクリックとタッチをイベントを設定
    document.addEventListener("click", handleDocumentClick, false);
    document.addEventListener("touchend", handleDocumentClick, false);

    return function cleanup() {
      document.removeEventListener("click", handleDocumentClick, false);
      document.removeEventListener("touchend", handleDocumentClick, false);
    };
    // 最初だけ呼び出す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownButton onClick={handleMouseDown}>
        <SelectIcon isOpen={isOpen} />
      </DropdownButton>
      {/* ドロップダウンを表示 */}
      {isOpen && (
        <DropdownMenu>
          <DropdownOption>
            {props.options.map((item, idx) => (
              <DropdownOption key={idx}>
                <DropdownItem item={item} />
              </DropdownOption>
            ))}
          </DropdownOption>
        </DropdownMenu>
      )}
    </DropdownRoot>
  );
};

export default Dropdown;

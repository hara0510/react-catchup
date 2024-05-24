import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useCallback } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawar } from "../../moleculs/MenuDrawar";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo (() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const onClickUserManagement = useCallback(() => {
    navigate("/home/user_management");
  }, [navigate]);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting");
  }, [navigate]);

  return (
    <>
      <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading
          as="h1"
          fontSize={{ base: "md",md: "lg" }}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none" ,md: "flex"}}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
            <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawar onClose={onClose} isOpen={isOpen} />
    </>
  );
});
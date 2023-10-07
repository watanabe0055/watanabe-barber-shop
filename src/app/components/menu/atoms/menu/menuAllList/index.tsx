"use client";
import { MenuType } from "@/app/type/menu";
import MenuCategory from "../menuCategory";
import PriceData from "../../priceData";
import Typography from "@/app/atoms/Typography";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import ButtonComponents from "@/app/atoms/Button";

interface MenuListProps {
  menuList: MenuType;
}

/**
 * メニュー一覧のリストを表示するコンポーネント（モーダルあり）
 * @param menuList メニュー一覧
 */
const MenuAllList: React.FC<MenuListProps> = ({ menuList }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Modal.setAppElement("#modal_element");
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(202, 202, 202, 0.1)",
    },
    content: {
      width: "90%",
      height: "90%",
      margin: "auto",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      borderRadius: "12px",
      padding: "1rem",
    },
  };
  return (
    <>
      <Typography text="Menu" size="xl3" weight="bold" align="center" />
      {Object.keys(menuList).map((listName) => {
        const key = listName as keyof MenuType;
        return (
          <div key={listName} id="modal_element">
            <MenuCategory listName={listName} />
            <ul className="pl-3">
              {menuList[key].map((item, index) => (
                <li key={index}>
                  <button onClick={openModal}>
                    <PriceData item={item} />
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                  >
                    <ButtonComponents
                      onClick={closeModal}
                      buttonText="閉じる"
                      bgColorType="primary"
                    />
                    <div>
                      <PriceData item={item} />
                    </div>
                  </Modal>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default MenuAllList;

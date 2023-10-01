"use client";
import { MenuType } from "@/app/type/menu";
import MenuCategory from "../menuCategory";
import PriceData from "../../priceData";
import Typography from "@/app/atoms/Typography";
import { useState } from "react";
import Modal from "react-modal";

interface MenuListProps {
  menuList: MenuType;
}

const MenuAllList: React.FC<MenuListProps> = ({ menuList }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#modal_element");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
                  >
                    <button onClick={closeModal}>閉じる</button>
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

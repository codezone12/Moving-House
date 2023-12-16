import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import windowWithBorderBox from "../../../../Assets/images/windows-counter-with-frames.png";
import windowWithoutBorderBox from "../../../../Assets/images/windows-counter-without-frames.png";
import { useState } from "react";
const WindowGuideModal = ({ showWindowGuide, handleCloseOpenInfo }) => {
  const [selectValue, setSelectValue] = useState("1");
  const handleChangeFrames = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <>
      <Modal
        isOpen={showWindowGuide}
        isCentered={true}
        onClose={handleCloseOpenInfo}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="mb-5">
            <div className="text-[32px] font-normal mb-5 mt-5">
              <span>The Window guide</span>
            </div>
            <div className="mb-4 leading-6">
              <span className="text-[16px] ">
                Here you can see examples of how we count different types of
                windows, so you know how many windows you need to book.
              </span>
            </div>
            <div className="mb-5">
              <Select className="guideSelector" onChange={handleChangeFrames}>
                <option value="1" selected>
                  With Frames
                </option>
                <option value="2">Without Frames</option>
                {/* <option value="option3">Option 3</option> */}
              </Select>
            </div>
            <div>
              <img
                src={
                  selectValue === "1"
                    ? windowWithBorderBox
                    : windowWithoutBorderBox
                }
                alt=""
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default WindowGuideModal;

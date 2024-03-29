import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

function RateModal({ loadRate, showRateModal, closeRateModal, rateProject }) {
  const [num, setNum] = useState("");

  return (
    <div>
      <Modal
        isOpen={showRateModal}
        onClose={closeRateModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate this Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Rate</FormLabel>
              <Input placeholder='1-5' onChange={(e) => setNum(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor='#ba52ed' mr={3} onClick={() => rateProject(num)} isLoading={loadRate} loadingText='Submitting'>
              Rate
            </Button>
            <Button onClick={closeRateModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default RateModal;
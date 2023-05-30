import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFolder } from 'react-icons/fa';

const handleDownload = () => {
  const link = document.createElement('a');
  link.download = 'document.docx';
  link.href = '/assets/JudahBSullivan-Resume.docx';
  link.click();
};

const ResumeButton = () => {
  return (
    <>
      <IconButton
        color={useColorModeValue('#f0e7db', '#202023')}
        aria-label="resume download button"
        size={'sm'}
        icon={<FaFolder />}
        variant={'ghost'}
        onClick={handleDownload}
        _hover={{
          bg: useColorModeValue('whiteAlpha.900', 'blackAlpha.800'),
          color: useColorModeValue('#202023', '#f0e7db'),
          borderRadius: 'md'
        }}
      />
    </>
  );
};

export default ResumeButton;

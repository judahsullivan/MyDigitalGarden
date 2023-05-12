import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFolder } from 'react-icons/fa';

const handleDownload = () => {
  const link = document.createElement('a');
  link.download = 'document.docx';
  link.href = '/assets/JudahSullivan2022.docx';
  link.click();
};

const ResumeButton = () => {
  return (
    <>
      <IconButton
        aria-label="resume download button"
        size={'sm'}
        icon={<FaFolder />}
        variant={'ghost'}
        onClick={handleDownload}
      />
    </>
  );
};

export default ResumeButton;

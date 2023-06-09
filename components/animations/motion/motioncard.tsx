import { MotionBox } from './motion';

const MotionCard = ({ children, delay = 0 }: any) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </MotionBox>
);

export default MotionCard;

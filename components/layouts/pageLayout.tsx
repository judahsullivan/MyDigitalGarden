import React, { Fragment, ReactNode } from 'react';
import SEO from '../global/seo';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  keywords?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

const PageLayout = ({ children, title, description, keywords }: Props): JSX.Element => (
  <Fragment>
    <SEO title={title} description={description} keywords={keywords} />
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  </Fragment>
);

export default PageLayout;

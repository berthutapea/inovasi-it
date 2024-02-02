// Section Heading Animation
export const avatarAnimation = {
  hidden: { y: 15 },
  show: {
    y: [15, 0, -15, 0],
    transition: {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

// Section Body
export const sectionBodyAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.75,
    },
  },
};

// Section Heading Animation
export const headingAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: 'spring' },
  },
};

export const contactAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
};

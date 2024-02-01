// eslint-disable-next-line import/prefer-default-export
export const fadeIn = (direction, delay) => {
  let hiddenY;
  let hiddenX;

  if (direction === 'up') {
    hiddenY = 80;
    hiddenX = 0;
  } else if (direction === 'down') {
    hiddenY = -80;
    hiddenX = 0;
  } else {
    hiddenY = 0;
    if (direction === 'left') {
      hiddenX = 80;
    } else if (direction === 'right') {
      hiddenX = -80;
    } else {
      hiddenX = 0;
    }
  }

  const hidden = {
    y: hiddenY,
    opacity: 0,
    x: hiddenX,
  };

  const show = {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  };

  return {
    hidden,
    show,
  };
};

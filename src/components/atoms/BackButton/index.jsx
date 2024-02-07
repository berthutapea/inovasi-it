import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 m-4  z-10 cursor-pointer">
      <Button
        className="rounded-full py-2 px-2"
        aria-label="link"
        type="submit"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </Button>
    </div>
  );
}

export default BackButton;

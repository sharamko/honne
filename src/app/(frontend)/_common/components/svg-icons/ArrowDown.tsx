const ArrowDown = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <svg
      style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.08301 0.833252L4.00015 3.50492L6.91634 0.833252"
        stroke="#4F4634"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;

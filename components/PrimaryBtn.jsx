const PrimaryBtn = ({ label }) => {
  return (
    <button className="font-inter font-medium text-white bg-custom-green px-4 py-2 text-base cursor-pointer rounded-full ml-8">
      {label}
    </button>
  );
};

export default PrimaryBtn;

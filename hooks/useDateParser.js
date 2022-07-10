const useDateParser = () => {
  const parsedDate = ({ date }) => {
    let tempDate = new Date(date);
    if (tempDate.getMonth() == 0) {
      return `${tempDate.getDate()} January ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 1) {
      return `${tempDate.getDate()} February ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 2) {
      return `${tempDate.getDate()} March ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 3) {
      return `${tempDate.getDate()} April ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 4) {
      return `${tempDate.getDate()} May ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 5) {
      return `${tempDate.getDate()} June ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 6) {
      return `${tempDate.getDate()} July ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 7) {
      return `${tempDate.getDate()} August ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 8) {
      return `${tempDate.getDate()} September ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 9) {
      return `${tempDate.getDate()} October ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 10) {
      return `${tempDate.getDate()} November ${tempDate.getFullYear()}`;
    } else if (tempDate.getMonth() == 11) {
      return `${tempDate.getDate()} December ${tempDate.getFullYear()}`;
    }
  };

  return parsedDate;
};

export default useDateParser;

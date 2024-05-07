/** @format */
import Swal from "sweetalert2";
const formatDate = (isostring) => {
  const day = new Date(isostring);
  const year = day.getFullYear();
  let month = day.getMonth() + 1;
  if (month <= 9) month = "0" + month;
  let days = day.getDate();
  if (days <= 9) days = "0" + days;
  return `${year}-${month}-${days}`;
};
const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  }).format(number);
  return newNumber;
};

export { formatDate, formatPrice };

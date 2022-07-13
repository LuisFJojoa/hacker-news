export const getHoursToCreated = (dataString) =>
  diffHours(new Date().getTime(), new Date(dataString).getTime());

const diffHours = (currentDate, postDate) => {
  const result = Math.abs((currentDate - postDate) / 1000 / (60 * 60));
  return result < 0.5
    ? `${Math.round(result * 60)} minutes ago`
    : (Math.round(result) === 1)? `${Math.round(result)} hour ago`:`${Math.round(result)} hours ago` ;
};

const formatDate = (date) => {
  const formatted = new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return formatted;
};

export default formatDate;

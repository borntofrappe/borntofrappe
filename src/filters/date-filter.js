module.exports = date => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
  
    return `${months[month]} ${day}, ${year}`;
  };
  
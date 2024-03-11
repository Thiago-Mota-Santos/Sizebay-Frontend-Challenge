const dayOfWeek = new Date().getDate()
const month = new Date().toLocaleString('en-US', { month: 'short' });
const year = new Date().getFullYear();

export { dayOfWeek, month, year}
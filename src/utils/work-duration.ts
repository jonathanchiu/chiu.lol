export const formatExperience = (start: string, now = new Date()) => {
  const [year, month] = start.split('-').map(Number);
  const years = Math.floor(((now.getUTCFullYear() - year) * 12 + now.getUTCMonth() + 1 - month) / 12);
  return `${years}+ years of experience`;
};

export const formatDuration = (start: string, end?: string, now = new Date()) => {
  const from = new Date(`${start}-01T00:00:00Z`);
  const to = end ? new Date(`${end}-01T00:00:00Z`) : now;
  // Include both endpoint months, matching the month-level dates in the profile.
  const totalMonths = (to.getUTCFullYear() - from.getUTCFullYear()) * 12
    + to.getUTCMonth() - from.getUTCMonth() + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return [
    years && `${years} ${years === 1 ? 'yr' : 'yrs'}`,
    months && `${months} ${months === 1 ? 'mo' : 'mos'}`,
  ].filter(Boolean).join(' ');
};

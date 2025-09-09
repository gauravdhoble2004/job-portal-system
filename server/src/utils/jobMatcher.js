function scoreCandidate(parsedText = '', job) {
  const text = parsedText.toLowerCase();
  let score = 0;
  (job.skills || []).forEach(skill => {
    const s = skill.toLowerCase();
    if (text.includes(s)) score += 1;
  });
  const max = Math.max(1, (job.skills || []).length);
  return Math.round((score / max) * 100);
}

module.exports = { scoreCandidate };

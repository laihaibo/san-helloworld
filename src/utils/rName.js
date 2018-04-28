const r16 = () => {
  return `%u${(Math.round(Math.random() * 20901) + 19968).toString(16)}`;
};

const rName = () => {
  const name = r16() + r16();
  return unescape(name);
};

export default rName;

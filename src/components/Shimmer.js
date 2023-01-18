export default Shimmer = () => {
  return Array(12)
    .fill("")
    .map((item, index) => <div className="shimmer-card" key={index}></div>);
};

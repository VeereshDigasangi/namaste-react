export default Shimmer = () => {
  return Array(5)
    .fill("")
    .map((item, index) => <div className="shimmer-card" key={index}></div>);
};

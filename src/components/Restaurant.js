import Constants from "../common/constants";
export default RestrauntCard = (props) => {
  return (
    <div className="card">
      <img src={`${Constants.CDN_URL}${props?.cloudinaryImageId}`} />
      <h2>{props?.name}</h2>
      <h3>{props?.cuisines?.join()}</h3>
      <h4>{props?.rating}</h4>
    </div>
  );
};

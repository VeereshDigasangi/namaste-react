import Constants from "../common/constants";
export default RestrauntCard = (props) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={`${Constants.CDN_URL}${props?.cloudinaryImageId}`} />
      <h2 className="font-bold text-xl">{props?.name}</h2>
      <h3 className="">{props?.cuisines?.join()}</h3>
      <h4>{props?.rating}</h4>
    </div>
  );
};

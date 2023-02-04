import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, section }) => {
  return (
    <div className="border border-black p-2 m-2 ">
      <h1 className="font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(section)}
        >
          Show
        </button>
      ) : (
        <div>
          <button
            className="cursor-pointer underline"
            onClick={() => {
              setIsVisible(null);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");
  return (
    <div>
      <h1 className="text-3xl m-2 p-2 font-bold ">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={sectionConfig === "about"}
        section="about"
        setIsVisible={setSectionConfig}
      />
      <Section
        title="Team Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "team"}
        section="team"
        setIsVisible={setSectionConfig}
      />
      <Section
        title="Career Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "careers"}
        section="careers"
        setIsVisible={setSectionConfig}
      />
    </div>
  );
};

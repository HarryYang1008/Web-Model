import React from "react";
import ProfileCard from "./ProfileCard.jsx"; // 根据你的实际路径调整
import profile1 from "../profile1.png"; // 示例头像

const ProfileGrid = () => {
  const cards = Array.from({ length: 16 }, (_, i) => (
    <ProfileCard
      key={i}
      name={`User ${i + 1}`}
      title="Software Engineer"
      handle={`user${i}`}
      status="Online"
      contactText="Contact Me"
      avatarUrl={profile1}
      showUserInfo={true}
      enableTilt={false}
      enableMobileTilt={false}
      onContactClick={() => console.log(`Contact ${i + 1} clicked`)}
    />
  ));

  return <div className="profile-grid-container">{cards}</div>;
};

export default ProfileGrid;

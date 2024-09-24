import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  icon: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex gap-10 justify-between items-center px-2 py-2.5 w-full whitespace-nowrap rounded-lg max-w-[224px] min-h-[40px] ${
        isActive ? 'bg-indigo-900 text-white font-bold' : 'text-zinc-600'
      }`
    }
  >
    <div className="flex gap-2 items-center self-stretch my-auto">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        alt={`${label} icon`}
      />
      <div className="self-stretch my-auto">{label}</div>
    </div>
    <div className="flex gap-1 self-stretch my-auto min-h-[20px]" />
  </NavLink>
);

interface SidebarProps {
  userType: 'candidate' | 'employer';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  const candidateLinks = [
    { to: "/candidate/", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e4409860d25b72103d776ef9c50f57601a2a4b20eaf814a53a9990ad8025391?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Home" },
    { to: "/candidate/upload", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49f2c4575a0585c5ce1edae067f560f8c29f0679daa1b8859a331ab7c17b62dc?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Upload Documents" },
    { to: "/candidate/jobs", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a48353a2509bf4c9bb7099f3a126f9f83d2e30e24e47a011a189c539ffb3a239?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Jobs" },
    { to: "/candidate/messaging", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0513e7c877bccfc32367f448b6281fe521df21d352c19454c0844bac1dffb6b?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Messaging" },
  ];

  const employerLinks = [
    { to: "/employer/", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e4409860d25b72103d776ef9c50f57601a2a4b20eaf814a53a9990ad8025391?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Home" },
    { to: "/employer/job-post", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ffaeb0dad39e72813020926d1e344eb19ffbe6a5c5ac8c37a0797182d39a489?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "My job posts" },
    { to: "/employer/upload", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2d6d5e6432623b35d738aabfc9a1996e30b7a32c549e8dc1f432334961fa954?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Upload Documents" },
    { to: "/employer/post-job", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ece559a91829ca83ee1253f06946ca38aa242ae8d963e031ab1385da2b10788?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Post a Job" },
    { to: "/employer/company-profile", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/545c65c9cdd0b933c6bef5aaf5464ab88d5ba0f8812102542d26cd6f4229c09f?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Company Profile" },
    { to: "/employer/messaging", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0513e7c877bccfc32367f448b6281fe521df21d352c19454c0844bac1dffb6b?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Messaging" },
    { to: "/employer/notifications", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2f97e160992de93f5ca44c942583b29b54b7d393b87d9d10a37173285492786?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Notifications" },
    { to: "/employer/interview-analysis", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/your-icon-url-here.png?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3", label: "Interview Analysis" },
  ];

  const links = userType === 'candidate' ? candidateLinks : employerLinks;

  return (
    <div className="flex flex-col items-center pt-6 text-sm leading-none bg-white border-r border-zinc-200 max-w-[256px] pb-[628px] text-zinc-600">
      <div className="flex flex-col w-56 max-w-full">
        {links.map((link) => (
          <SidebarItem
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
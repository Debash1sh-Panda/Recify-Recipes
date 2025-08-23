"use client";
import Image from "next/image";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "alex",
      userImg: "https://i.pravatar.cc/150?img=2",
      action: "liked your photo.",
      time: "2h",
      postImg: "https://i.pravatar.cc/150?img=2",
      section: "This Week",
    },
    {
      id: 2,
      type: "follow",
      user: "sophia",
      userImg: "https://i.pravatar.cc/150?img=2",
      action: "started following you.",
      time: "5h",
      section: "This Week",
    },
    {
      id: 3,
      type: "comment",
      user: "john",
      userImg: "https://i.pravatar.cc/150?img=2",
      action: "commented: Nice shot 🔥",
      time: "1d",
      postImg: "https://i.pravatar.cc/150?img=3",
      section: "This Month",
    },
  ];

  const grouped = notifications.reduce((acc: any, n) => {
    acc[n.section] = acc[n.section] || [];
    acc[n.section].push(n);
    return acc;
  }, {});

  return (
    <div className="w-[100vw] md:w-[80vw] mx-auto min-h-screen p-2 md:p-15">
      {/* Header */}
      <div className="p-4 font-bold text-lg">
        Notifications
      </div>

      {/* Sections */}
      <div className="flex flex-col">
        {Object.keys(grouped).map((section) => (
          <div key={section}>
            <p className="text-sm font-semibold text-gray-500 px-4 mt-4 mb-2">
              {section}
            </p>
            {grouped[section].map((n: any) => (
              <div
                key={n.id}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 hover:text-black"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={n?.userImg}
                    alt={n.user}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-sm">
                    <span className="font-semibold">{n.user}</span>{" "}
                    <span>{n.action}</span>{" "}
                    <span className="text-gray-500">{n.time}</span>
                  </div>
                </div>
                {n.postImg && (
                  <Image
                    src={n?.postImg}
                    alt="post"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

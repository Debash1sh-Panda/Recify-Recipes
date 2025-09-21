export default function EditProfile() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex justify-center w-[82vw]">
      <div className="w-full space-y-8">
        {/* Header */}
        <h1 className="text-2xl font-bold">Edit profile</h1>

        {/* Profile Section */}
        <div className="flex items-center justify-between bg-[#161616] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-700"></div>
            <div>
              <p className="font-semibold">somgorai268</p>
              <p className="text-sm text-gray-400">Som Gorai</p>
            </div>
          </div>
          <button className="bg-[#3b82f6] px-4 py-2 rounded-lg font-medium">
            Change photo
          </button>
        </div>

        {/* Website */}
        <div>
          <label className="block font-semibold mb-2">Website</label>
          <input
            type="text"
            placeholder="Website"
            className="w-full bg-[#262626] px-4 py-3 rounded-xl outline-none"
          />
          <p className="text-xs text-gray-400 mt-2">
            Editing your links is only available on mobile. Visit the Instagram
            app and edit your profile to change the websites in your bio.
          </p>
        </div>

        {/* Bio */}
        <div>
          <label className="block font-semibold mb-2">Bio</label>
          <div className="relative">
            <textarea
              rows={3}
              placeholder="Bio"
              className="w-full bg-[#0f0f0f] px-4 py-3 rounded-xl outline-none resize-none"
            ></textarea>
            <span className="absolute bottom-2 right-4 text-sm text-gray-400">
              0 / 150
            </span>
          </div>
        </div>

        {/* Show Threads Badge */}
        <div>
          <label className="block font-semibold mb-2">Show Threads badge</label>
          <div className="flex items-center justify-between bg-[#161616] px-4 py-3 rounded-xl">
            <span>Show Threads badge</span>
            <button className="w-10 h-6 bg-white rounded-full relative">
              <span className="w-4 h-4 bg-black rounded-full absolute right-1 top-1"></span>
            </button>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-2">Gender</label>
          <select className="w-full bg-[#161616] px-4 py-3 rounded-xl outline-none">
            <option>Prefer not to say</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <p className="text-xs text-gray-400 mt-2">
            This won’t be part of your public profile.
          </p>
        </div>

        {/* Show account suggestions */}
        <div>
          <label className="block font-semibold mb-2">
            Show account suggestions on profiles
          </label>
          <div className="flex items-center justify-between bg-[#161616] px-4 py-3 rounded-xl">
            <div>
              <p className="font-medium">Show account suggestions on profiles</p>
              <p className="text-xs text-gray-400">
                Choose whether people can see similar account suggestions on your
                profile, and whether your account can be suggested on other profiles.
              </p>
            </div>
            <button className="w-10 h-6 bg-[#262626] rounded-full relative">
              <span className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400">
          Certain profile info, like your name, bio and links, is visible to
          everyone.
        </p>
      </div>
    </div>
  );
}

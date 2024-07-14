interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section() {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <div class="h-[50%] w-[22%] shadow-lg flex flex-col items-center justify-center max-sm:h-[80%] max-sm:w-[80%] gap-6 max-sm:gap-4 rounded">
        <div class="flex flex-col">
          <label htmlFor="username" class="mb-1">Username</label>
          <input type="text" name="username" id="username" placeholder="Enter username" class="border-gray-400 border py-1 px-2 rounded" />
        </div>
        <div class="flex flex-col">
          <label htmlFor="password" class="mb-1">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter password" class="border-gray-400 border py-1 px-2 rounded" />
        </div>
        <button class="px-3 py-2 bg-[#02F67C] rounded-md">Login</button>
      </div>
    </div>
  )
}
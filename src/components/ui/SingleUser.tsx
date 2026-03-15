import { User } from "@/src/types/types";
import PrimaryButton from "./../buttons/PrimaryButton";

export default function SingleUser({ user }: { user: User }) {
  return (
    <>
      <div className="grid grid-cols-5 gap-3 pb-5 last:pb-0 mb-5 last:mb-0 border-b-2 last:border-b-0 border-main-grey">
        <div className="col-span-3 md:col-span-2">
          <span className="text-[20px]">{user.name}</span>
        </div>

        <div className="hidden md:block col-span-5 md:col-span-1">
          <span className="text-gray-700">{user.company.name}</span>
        </div>
        <div className="hidden md:block col-span-5 md:col-span-1">
          <span className="text-gray-700">{user.email}</span>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="button-wrapper w-fit mx-auto">
            <PrimaryButton
              text="View Post"
              to={`/users/${user.id}`}
            />
          </div>
        </div>
        <div className="col-span-5 md:hidden">
          <span className="text-gray-700">{user.company.name}</span>
        </div>
        <div className="col-span-5 md:hidden">
          <span className="text-gray-700">{user.email}</span>
        </div>
      </div>
    </>
  );
}

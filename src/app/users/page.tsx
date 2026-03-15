import Title from "./../../components/ui/Title";
export default function page() {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="hidden lg:block col-span-1"></div>
        <div className="col-span-6 lg:col-span-5">
          <section className="users">
            <div className="wrapper p-2">
              <div className="content-wrapper bg-white rounded-[24px] p-3">
                <div className="title-wrapper mb-6">
                  <Title text="Users" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

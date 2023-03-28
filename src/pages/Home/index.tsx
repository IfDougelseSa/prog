import Sidebar from "components/Sidebar";


const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
          <Sidebar
              list={[
                { link: "/", titleLink: "Home" },
                { link: "utf", titleLink: "Utf-8" },
              ]}
            />
          </div>
          <div className="col-8 base-card">

            Home
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

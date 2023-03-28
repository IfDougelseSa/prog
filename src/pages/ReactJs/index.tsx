import Sidebar from "components/Sidebar";


const Reactjs = () => {

        return(
            <>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-4">
                  <Sidebar
                    list={[
                      { link: "/html", titleLink: "O que é HTML?" },
                      { link: "/css", titleLink: "teste" },
                    ]}
                  />
                </div>
                <div className="col-8 base-card">
                  React
                </div>
              </div>
            </div>
          </>
        )
}

export default Reactjs;
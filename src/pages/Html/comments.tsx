import Sidebar from "components/Sidebar";

const Comments = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-4">
            <Sidebar
              list={[
                { link: "/html", titleLink: "O que é HTML?" },
                { link: "/html/comments", titleLink: "<!-- -->" },
              ]}
            />
          </div>
          <div className="col-8 base-card">
            Comentários
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

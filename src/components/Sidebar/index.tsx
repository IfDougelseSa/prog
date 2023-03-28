import { Link } from "react-router-dom";

const Sidebar = (props: { list: any[] }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            {props.list.map((item: any) => {
              return (
                <>
                  <Link to={item.link}>
                    <p>{item.titleLink}</p>
                  </Link>
                </>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

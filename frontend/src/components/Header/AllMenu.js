import { menu , create } from "../../data/allMenu";
import AllMenuItem from "./AllMenuItem";


const AllMenu = () => {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Social
            </div>
            {
                menu.slice(0,6).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Entertainment
            </div>
            {
                menu.slice(6,9).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Shopping
            </div>
            {
                menu.slice(9,11).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Personal
            </div>
            {
                menu.slice(11,15).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Professional
            </div>
            {
                menu.slice(15,17).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                Community Resources
            </div>
            {
                menu.slice(17,21).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
          <div className="all_menu_Group">
            <div className="all_menu_group_header">
                More from Meta
            </div>
            {
                menu.slice(21,23).map((items,i)=>{
                    return(
                        <AllMenuItem key={i} name={items.name} description={items.description} icon={items.icon} />
                    )
                })
            }
          </div>
        </div>
        <div className="all_right">
            <div className="all_right_header">Create</div>
            {create.map((items,i)=>{
                return(
                    <div key={i} className="all_right_item hover1">
                        <div className="all_right_circle">
                            <div className={items.icon}></div>
                        </div>
                        {items.name}
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};
export default AllMenu;

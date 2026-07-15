import Top from "./components/compons/top";
import Bottom from "./components/compons/Bottom";
import { useState } from "react";

const App = () => {
const [openCreateModal, setOpenCreateModal] = useState(false);

  return (
    <div>
   <Top/>
   <Bottom />
    </div>
  );
};

export default App;

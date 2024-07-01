
import { Menu } from "../../components/Menu"
import { Header } from '../../components/Header'
import CRMTable from "../../components/CRMTable";


export const Dashboard = () => {


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Menu className="w-64 bg-gray-200"/>
        <section className="flex-1 p-4 bg-gray-100 overflow-auto">
          <CRMTable />
        </section>
      </div>
    </div>
  );
}

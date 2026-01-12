import Navbar from "../../components/navigation/navbar";

export default function Statistics() {
     return (
          <>
               <Navbar links={[`/dashboard/profile`, `/dashboard/statistics`]} label={["Profile", "Statistics"]} />
               <h1>Statistics</h1>
          </>
     )
}
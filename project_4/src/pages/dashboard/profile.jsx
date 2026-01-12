import Navbar from "../../components/navigation/navbar";

export default function Profile() {
     return (
          <>
               <Navbar links={[`/dashboard/profile`, `/dashboard/statistics`]} label={["Profile", "Statistics"]} />
               <h1>Profile</h1>
          </>
     )
}
import appwriteService from "@/appwrite/auth";
import useAppwrite from "@/appwrite/authContext";
import { useEffect, useState } from "react";

function Organizers({ org }) {
  return <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt className="text-sm font-medium leading-6 text-gray-900">{org.name}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{org.head}</dd>
  </div>
}

function HomePage({ depFun }) {

  const [organizersList, setOrganizersList] = useState([]);

  const { user: { university_id } } = useAppwrite();

  useEffect(() => {
    appwriteService.getOrganizers(university_id)
      .then(r => {
        setOrganizersList(r);
      })
      .catch(e => console.log('o_O wrong!', e))
  }, [depFun]);



  return (
    <div>
      {/* <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div> */}
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {organizersList.map(o => <Organizers key={o.$id} org={o} />)}
        </dl>
      </div>
    </div>
  )
}

export default HomePage
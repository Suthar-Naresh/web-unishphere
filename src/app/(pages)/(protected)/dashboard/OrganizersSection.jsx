import appwriteService from "@/appwrite/auth";
import useAppwrite from "@/appwrite/authContext";
import { useEffect, useState } from "react"

function Organizers({ org }) {
  return <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt className="text-sm font-medium leading-6 text-gray-900">{org.name}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{org.head}</dd>
  </div>
}

function OrganizersSection({ depFun }) {
  const [organizersList, setOrganizersList] = useState([]);
  const { user: { university_id } } = useAppwrite();

  useEffect(() => {
    // TODO: Optimize this... uncomment then see console 🤯🤯🤯
    // console.log('HEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHE');

    appwriteService.getOrganizers(university_id)
      .then(r => {
        setOrganizersList(r);
      })
      .catch(e => console.log('o_O wrong!', e));

  }, [depFun]);

  return (
    <div>
      <div className="mt-6">
        <dl className="divide-y divide-gray-300">
          {organizersList.map(o => <Organizers key={o.$id} org={o} />)}
        </dl>
      </div>
    </div>
  )
}

export default OrganizersSection
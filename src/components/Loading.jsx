import { ArrowPathIcon } from '@heroicons/react/24/outline'

function Loading() {
  return (
    <div className='flex justify-center items-center h-screen gap-2'>
      <ArrowPathIcon className="animate-spin h-6 w-6" aria-hidden="true" />
      <span className='text-xl font-medium text-black'>
        Loading...
      </span>
    </div>
  )
}

export default Loading
import { GlobeIcon } from "@heroicons/react/solid"


function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm
        text-gray-500">
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-1
            grid-flow-row-dense px-8 py-3" >
                <div className="flex justify-center items-center md:col-span-3 
                lg:col-span-1 lg:col-start-2">
                    <GlobeIcon className="h-5 mr-1 text-green-500" />Ingo Inc. 2021
                </div>
                <div className="flex justify-center space-x-4 whitespace-nowrap
                sm:justify-self-start">
                    <a className="link" href="">About</a>
                    <a className="link">Advertising</a>
                    <a className="link">Business</a>
                    <a className="link">How Search Works</a>
                </div>
                <div className="flex justify-center space-x-4 sm:ml-auto">
                    <a className="link">Privacy</a>
                    <a className="link">Terms</a>
                    <a className="link">Settings</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

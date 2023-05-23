import React from 'react'
import {FaFacebook,FaTwitter,FaTwitch,FaInstagram,FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 py-8 md:grid-cols-6 border-b-2 border-gray-600">
        <div>
          <h1 className="uppercase  font-bold pt-2">Solutions</h1>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div >
          <h1 className="uppercase  font-bold pt-2">Support</h1>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
            {/* <li>Cloud</li> */}
          </ul>
        </div>
        <div >
          <h1 className="uppercase  font-bold pt-2">Comapany</h1>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase  font-bold pt-2">Legal</h1>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1"> Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className='col-span-2'>
          <h1 className='uppercase py-4 font-bold'>Subscribe to our newsletter</h1>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form className='py-3 flex flex-col sm:flex-row'>
            <input type="text" placeholder='Enter email' className='w-full rounded p-2 mr-4'/>
            <button className='p-2'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-between py-8 items-center sm:flex-row  '>
        <p className=' pb-3'>2023 Workflow LLC. All rights reserved</p>
        <div className='flex justify-between w-[300px] text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer

import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">HireNear</h3>
            <p className="text-sm">Connecting talent with opportunities near you.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2025 HireNear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

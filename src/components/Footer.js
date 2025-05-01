import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
            <p>&copy; 2025 Arizon Digital Commerce Experts. All rights reserved.</p>
            <p>Follow us on:</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#Facebook" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#Twitter" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#Instagram" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
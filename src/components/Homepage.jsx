import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-purple-50">
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
        <span className="font-bold text-xl">Startup Hub</span>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>

        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
        
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
        Get Started
      </button>
    </nav>

    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex items-center justify-center">
        <img 
          src="/api/placeholder/500/400" 
          alt="Team illustration" 
          className="w-full max-w-md"
        />
      </div>

      <div>
        <span className="inline-block px-4 py-1 bg-purple-100 rounded-full text-sm text-purple-600">
          Welcome to Startup Hub
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold my-6">
          Launch Your Next Big Idea Today
        </h1>
        
        <p className="text-gray-600 mb-8">
          Join our community of innovators and entrepreneurs. Get the resources
          and support you need to turn your vision into reality.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">50k+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
        </div>

        <button onClick = {()=>navigate('/dashboard')}className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex items-center space-x-2">
        <span>Join Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div>
      
    </div>
  </div>
  )
}

export default Homepage
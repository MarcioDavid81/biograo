"use client"

import React, { ReactNode } from 'react';
import { motion } from "motion/react"

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, decelerate: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <div className="text-blue-600 text-xl">{icon}</div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Principais Recursos
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
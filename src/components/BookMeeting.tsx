
import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

interface BookMeetingProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookMeeting = ({ isOpen, onClose }: BookMeetingProps) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && calendarRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/specialists-chargetrux/30min',
        parentElement: calendarRef.current
      });
    }
    
    // Add event listener to close the booking modal when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Calendar className="mr-2 text-chargetrux-green" /> Book a Meeting
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white"
          >
            ×
          </button>
        </div>
        <p className="text-gray-300 mb-6">
          Schedule a 30-minute intro call with our fleet specialists to discuss your specific needs.
        </p>
        <div 
          ref={calendarRef} 
          className="min-h-[600px] bg-white rounded-lg"
          style={{ height: '630px' }}
        />
      </div>
    </div>
  );
};

export default BookMeeting;

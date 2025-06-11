
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use a placeholder video URL - you can replace this with your actual video
  const videoUrl = "/lovable-uploads/chargetrux-demo-video.mp4"; // Replace with your actual video file

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <Card className="bg-white/10 backdrop-blur-sm border-chargetrux-blue/20">
        <CardContent className="p-8">
          <div className="relative">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full rounded-lg cursor-pointer"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
              poster="/lovable-uploads/video-thumbnail.jpg" // Optional: add a thumbnail image
            />
            
            <div className="flex justify-center mt-4">
              <Button
                onClick={togglePlayPause}
                className="bg-chargetrux-blue hover:bg-chargetrux-blue/90"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoSection;


import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      setVideoFile(videoUrl);
      setIsPlaying(false);
    }
  };

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
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            About ChargeTrux Video
          </h2>
          
          {!videoFile ? (
            <div className="text-center">
              <div className="border-2 border-dashed border-chargetrux-blue/40 rounded-lg p-12 mb-6">
                <Upload className="w-16 h-16 text-chargetrux-blue mx-auto mb-4" />
                <p className="text-gray-300 mb-4">Upload a video to showcase ChargeTrux</p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-chargetrux-green hover:bg-chargetrux-green/90"
                >
                  Choose Video File
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          ) : (
            <div className="relative">
              <video
                ref={videoRef}
                src={videoFile}
                className="w-full rounded-lg cursor-pointer"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls
              />
              
              <div className="flex justify-center mt-4 gap-4">
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
                
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="border-chargetrux-blue text-chargetrux-blue hover:bg-chargetrux-blue hover:text-white"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Video
                </Button>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoSection;

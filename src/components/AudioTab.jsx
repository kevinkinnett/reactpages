import React, { useState, useEffect } from 'react';

const Music = () => <span>🎵</span>;
const PlayIcon = () => <span>▶️</span>;
const PauseIcon = () => <span>⏸️</span>;

const AudioTab = () => {
  const [audioFiles, setAudioFiles] = useState([
    { 
      id: 1, 
      name: 'Advanced Imagery Business Plan: North Georgia Market Analysis', 
      description: 'Detailed analysis of the North Georgia market for drone photography and advanced imagery services.',
      url: 'https://sanewsbotdeveus2.blob.core.windows.net/my-podcast/reactpages/Advanced%20Imagery%20Business%20Plan_%20North%20Georgia%20Market%20Analysis.wav',
      format: 'wav'
    },
    { 
      id: 2, 
      name: 'Financial Projections & Revenue Strategies', 
      description: 'Discussion of different pricing models and 5-year financial outlook.',
      url: 'https://sanewsbotdeveus2.blob.core.windows.net/my-podcast/reactpages/financial-projections.mp3',
      format: 'mp3'
    },
    { 
      id: 3, 
      name: 'Legal Requirements for Drone Photography', 
      description: 'Overview of FAA regulations, insurance needs, and business licensing.',
      url: 'https://sanewsbotdeveus2.blob.core.windows.net/my-podcast/reactpages/legal-drone-considerations.mp3',
      format: 'mp3'
    }
  ]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});

  // Handle play/pause toggling
  const togglePlay = (audioId) => {
    const audioElement = document.getElementById(`audio-${audioId}`);
    
    if (audioElement) {
      if (isPlaying[audioId]) {
        audioElement.pause();
        setIsPlaying({...isPlaying, [audioId]: false});
      } else {
        // Pause all other playing audios
        Object.keys(isPlaying).forEach(id => {
          if (isPlaying[id] && id !== audioId.toString()) {
            const otherAudio = document.getElementById(`audio-${id}`);
            if (otherAudio) {
              otherAudio.pause();
              setIsPlaying({...isPlaying, [id]: false});
            }
          }
        });
        
        audioElement.play();
        setIsPlaying({...isPlaying, [audioId]: true});
      }
    }
  };

  // Update playing state when audio ends
  useEffect(() => {
    audioFiles.forEach(audio => {
      const audioElement = document.getElementById(`audio-${audio.id}`);
      if (audioElement) {
        audioElement.addEventListener('ended', () => {
          setIsPlaying({...isPlaying, [audio.id]: false});
        });
      }
    });
  }, [audioFiles, isPlaying]);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Business Plan Audio Resources</h3>
      <p className="text-gray-600 mb-6">Listen to audio analyses and discussions about different aspects of the advanced imagery business plan.</p>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="space-y-4">
          {audioFiles.map((audio) => (
            <div key={audio.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3 mt-0.5">
                    <Music />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{audio.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{audio.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button 
                    onClick={() => togglePlay(audio.id)}
                    className="mr-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    {isPlaying[audio.id] ? <PauseIcon /> : <PlayIcon />}
                  </button>
                  
                  <div className="w-full">
                    <audio 
                      id={`audio-${audio.id}`}
                      className="w-full" 
                      controls
                      src={audio.url}
                      onPlay={() => setIsPlaying({...isPlaying, [audio.id]: true})}
                      onPause={() => setIsPlaying({...isPlaying, [audio.id]: false})}
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                
                <div className="text-sm text-right text-gray-500">
                  Format: {audio.format.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-bold text-blue-800">Upload Your Own Audio</h3>
        <p className="mt-2 text-blue-700">
          Have insights or discussions to share? Record your thoughts and upload them to enhance the business plan.
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Upload Audio (Demo Only)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioTab;

import React, { useState, useRef } from 'react';
import { GeminiService } from '../services/geminiService';
import { AIServiceType } from '../types';

const AILab: React.FC = () => {
  const [activeTool, setActiveTool] = useState<AIServiceType>(AIServiceType.SEARCH);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const gemini = new GeminiService();

  const handleSearch = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const data = await gemini.dentalSearch(input);
      setResult(data);
    } catch (e) {
      alert("Search failed. Please ensure your API key is configured.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageGen = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const url = await gemini.generateDentalVisual(input);
      setResult(url);
    } catch (e) {
      alert("Image generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnimate = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const videoUrl = await gemini.animateDentalPhoto(base64, "Animate this dental visualization naturally");
        setResult(videoUrl);
      };
      reader.readAsDataURL(file);
    } catch (e) {
      alert("Animation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-6">California Dental AI Lab</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Experience the future of dentistry. We use Gemini 3.0 to help visualize results and answer your health queries with grounding.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 p-1 bg-slate-100 rounded-2xl">
            {[
              { id: AIServiceType.SEARCH, label: "Dental Assistant", icon: "🔍" },
              { id: AIServiceType.IMAGE_GEN, label: "Smile Designer", icon: "🎨" },
              { id: AIServiceType.VIDEO_ANIMATE, label: "Veo Animator", icon: "🎬" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTool(tab.id); setResult(null); }}
                className={`flex-1 py-3 px-4 rounded-xl font-bold transition-all ${activeTool === tab.id ? 'bg-white shadow-sm text-teal-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <span className="mr-2">{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* Tool Area */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 min-h-[400px]">
            {activeTool === AIServiceType.SEARCH && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ask Anything About Your Dental Health</h3>
                <p className="text-slate-500">Grounded in Google Search for real-time accurate information.</p>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., What are the benefits of ceramic implants?" 
                    className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button 
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 disabled:opacity-50"
                  >
                    {loading ? 'Thinking...' : 'Search'}
                  </button>
                </div>
                {result && (
                  <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-700 leading-relaxed mb-6 whitespace-pre-wrap">{result.text}</p>
                    {result.sources?.length > 0 && (
                      <div className="pt-4 border-t border-slate-200">
                        <h4 className="text-sm font-bold text-slate-400 mb-2 uppercase">Sources:</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.sources.map((s: any, i: number) => (
                            <a key={i} href={s.web?.uri} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:underline">
                              {s.web?.title || 'Source'}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTool === AIServiceType.IMAGE_GEN && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Design Your New Smile</h3>
                <p className="text-slate-500">Visualize dental procedures using Nano Banana Pro.</p>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., Perfect white porcelain veneers on upper jaw" 
                    className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button 
                    onClick={handleImageGen}
                    disabled={loading}
                    className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 disabled:opacity-50"
                  >
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
                {result && (
                  <div className="mt-8 flex flex-col items-center">
                    <img src={result} alt="Generated Visualization" className="max-w-full h-auto rounded-2xl shadow-lg border border-slate-200" />
                    <p className="mt-4 text-xs text-slate-400">AI-generated visualization for illustrative purposes.</p>
                  </div>
                )}
              </div>
            )}

            {activeTool === AIServiceType.VIDEO_ANIMATE && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Animate Dental Photos</h3>
                <p className="text-slate-500">Bring medical images to life with Google Veo.</p>
                <div className="flex flex-col gap-6">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  />
                  <button 
                    onClick={handleAnimate}
                    disabled={loading || !file}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 disabled:opacity-50"
                  >
                    {loading ? 'Animating with Veo (may take a minute)...' : 'Animate with Veo'}
                  </button>
                </div>
                {result && (
                  <div className="mt-8 flex flex-col items-center">
                    <video src={result} controls className="max-w-full rounded-2xl shadow-lg border border-slate-200" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILab;

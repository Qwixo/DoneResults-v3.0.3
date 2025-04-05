import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EmailStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="email-stats" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Email Isn't Dead. It's Dominating.
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Email marketing is growing, expected to hit $13.7B in revenue by 2025 — and that's just the beginning.
          </p>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Side – Bullet Points */}
            <div className="w-full md:w-1/2">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Unmatched personalization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Direct line to decision-makers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">One of the most trusted & measurable marketing channels</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Still growing year after year</span>
                </li>
              </ul>
            </div>

            {/* Right Side – Image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                  <img 
                    src="/images/email-marketing-growth-chart.png" 
                    alt="Email Marketing Growth Chart" 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIEJhY2tncm91bmQgLS0+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmOGY5ZmEiLz4KCiAgPCEtLSBUaXRsZSAtLT4KICA8dGV4dCB4PSI0MDAiIHk9IjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzQzYTQwIj5FbWFpbCBNYXJrZXRpbmcgUmV2ZW51ZSBHcm93dGg8L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNmM3NTdkIj5Qcm9qZWN0ZWQgR3Jvd3RoIHRvIDIwMjUgKGluIGJpbGxpb25zIG9mIFVTRCk8L3RleHQ+CgogIDwhLS0gWC1heGlzIC0tPgogIDxsaW5lIHgxPSIxMDAiIHkxPSIzMDAiIHgyPSI3MDAiIHkyPSIzMDAiIHN0cm9rZT0iIzM0M2E0MCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHRleHQgeD0iMTUwIiB5PSIzMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM0M2E0MCI+MjAyMDwvdGV4dD4KICA8dGV4dCB4PSIzMDAiIHk9IjMzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzQzYTQwIj4yMDIyPC90ZXh0PgogIDx0ZXh0IHg9IjQ1MCIgeT0iMzMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNDNhNDAiPjIwMjM8L3RleHQ+CiAgPHRleHQgeD0iNjAwIiB5PSIzMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM0M2E0MCI+MjAyNTwvdGV4dD4KCiAgPCEtLSBZLWF4aXMgLS0+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjMwMCIgeDI9IjEwMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMzQzYTQwIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8dGV4dCB4PSI4MCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJlbmQiIGZpbGw9IiMzNDNhNDAiPjA8L3RleHQ+CiAgPHRleHQgeD0iODAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0iZW5kIiBmaWxsPSIjMzQzYTQwIj41PC90ZXh0PgogIDx0ZXh0IHg9IjgwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9ImVuZCIgZmlsbD0iIzM0M2E0MCI+MTA8L3RleHQ+CiAgPHRleHQgeD0iODAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0iZW5kIiBmaWxsPSIjMzQzYTQwIj4xNTwvdGV4dD4KICA8dGV4dCB4PSI4MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJlbmQiIGZpbGw9IiMzNDNhNDAiPjIwPC90ZXh0PgoKICA8IS0tIERhdGEgcG9pbnRzIC0tPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjI1MCIgcj0iNSIgZmlsbD0iIzAwQTc5RCIvPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjIyMCIgcj0iNSIgZmlsbD0iIzAwQTc5RCIvPgogIDxjaXJjbGUgY3g9IjQ1MCIgY3k9IjE5MCIgcj0iNSIgZmlsbD0iIzAwQTc5RCIvPgogIDxjaXJjbGUgY3g9IjYwMCIgY3k9IjE0MCIgcj0iNSIgZmlsbD0iIzAwQTc5RCIvPgoKICA8IS0tIExpbmUgY29ubmVjdGluZyBwb2ludHMgLS0+CiAgPHBhdGggZD0iTTE1MCwyNTAgTDMwMCwyMjAgTDQ1MCwxOTAgTDYwMCwxNDAiIHN0cm9rZT0iIzAwQTc5RCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIi8+CgogIDwhLS0gRGF0YSBsYWJlbHMgLS0+CiAgPHRleHQgeD0iMTUwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNDNhNDAiPiQ3LjVCPC90ZXh0PgogIDx0ZXh0IHg9IjMwMCIgeT0iMjEwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzQzYTQwIj4kOS4yQjwvdGV4dD4KICA8dGV4dCB4PSI0NTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM0M2E0MCI+JDExLjRCPC90ZXh0PgogIDx0ZXh0IHg9IjYwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzQzYTQwIj4kMTMuN0I8L3RleHQ+CgogIDwhLS0gQXJlYSB1bmRlciBjdXJ2ZSAtLT4KICA8cGF0aCBkPSJNMTUwLDI1MCBMMzAwLDIyMCBMNDUwLDE5MCBMNjAwLDE0MCBMNjAwLDMwMCBMMTUwLDMwMCBaIiBmaWxsPSIjMDBBNzlEIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=";
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Source: Statista, Global Industry Analysts (2022)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 italic">
              So if email is booming… how do you actually make it work?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailStats;

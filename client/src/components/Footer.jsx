import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">SurgiTrack</h3>
                    <p className="text-gray-300 text-sm">Keeping families connected during surgical procedures with real-time updates and peace of mind.</p>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Team Members</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                        <li>Adelola Abioye</li>
                        <li>Nathalie Chejin</li>
                        <li>Pablo de la Garza</li>
                        <li>Marissa Lamothe</li>
                        <li>Spandan Mahat</li>
                        <li>Angi Boiciuc</li>
                        <li>Nick Haynes</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Project Resources</h3>
                    <a href="https://github.com/chingu-voyages/V56-tier3-team-36" target='_blank' className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                        🔗 View on GitHub
                    </a>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} SurgiTrack.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
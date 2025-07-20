import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-800 text-white w-full py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Surgery Status Board</h3>
                    <p class="text-gray-300 text-sm">Keeping families connected during surgical procedures with real-time updates and peace of mind.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Team Members</h3>
                    <ul class="text-gray-300 text-sm space-y-1">
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
                    <h3 class="text-lg font-semibold mb-4">Project Resources</h3>
                    <a href="https://github.com/chingu-voyages/V56-tier3-team-36" target='_blank' class="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                        🔗 View on GitHub
                    </a>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Surgery Status Board. Built with care for families and medical professionals.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
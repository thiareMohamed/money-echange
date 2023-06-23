import React from 'react'

function Navbar() {
  return (
        <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    <span class="self-center text-gray-700 text-2xl font-semibold whitespace-nowrap">Money Echange</span>
                </a>
                <div class="flex md:order-2">
                <button type="button" class="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-light rounded-2xl text-sm px-4 py-2 text-center mr-3 md:mr-0">Connexion</button>                   
                <button type="button" class="text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-light rounded-2xl text-sm px-4 py-2 text-center mr-3 mx-2 md:mr-0">Deconnexion</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-orange-600 rounded md:bg-transparent md:text-orange-600 md:p-0" aria-current="page">Accueil</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">Nos Services</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">Blog</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">A PROPOS</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar